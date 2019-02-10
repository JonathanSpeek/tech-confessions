import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Card from '../components/Card'

const List = styled.div`
  margin-top: 64px 18px 18px 24px;
  display: grid;
  grid-template-columns: 1;
  justify-items: center;
  &:target {
	  animation: highlight 1s ease-out;
  }
  &:focus {
	  outline: none;
  }
  @keyframes highlight {
    50% {
      background-color: #3e30e080;
    }
  }
`

const LoadMore = styled.button`
  font-weight: 600;
  color: #3E30E0;
  text-transform: uppercase;
  background: #FFF;
  padding: 18px 32px;
  border-radius: 32px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  transition: transform 0.05s linear;
  outline: none;
  border: none;
  margin-bottom: 32px;
  &::-moz-focus-inner {
    border: 0;
  }
  &:focus {
		outline: 2px dotted #3E30E0;
	}
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  }
`

class CardList extends React.Component {
  constructor(props) {
    super(props)
    let cardsToShow = 10
    if (typeof window !== `undefined`) {
      cardsToShow = window.cardsToShow
    }

    this.state = {
      showingMore: cardsToShow > 10,
      cardsToShow: 10,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ cardsToShow: this.state.cardsToShow + 10 })
    }
    this.ticking = false
    this.setState({scrollYPosition: window.scrollY })
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.cardsToShow = this.state.cardsToShow
  }

  render() {
    return (
      <List id="card-list" tabIndex="-1">
        <StaticQuery
          query={graphql`
            query CardQuery {
              allContentfulCard {
                edges {
                  node {
                    text
                    date
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              {data.allContentfulCard.edges.map(e => e.node).slice(0, this.state.cardsToShow).map((card, i) => (
                <Card key={i} data={card.text} date={card.date} />
              ))}

              {!this.state.showingMore && (
                <LoadMore
                  onClick={() => {
                    this.setState({
                      postsToShow: this.state.postsToShow + 10,
                      showingMore: true,
                    })
                  }}
                  >
                    Load More
                  </LoadMore>
                )
              }
            </>
          )}
        />
      </List>
    )
  }
}

export default CardList


