import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import SubmitForm from '../components/SubmitForm'
import Card from '../components/Card'
import BackToTopButton from '../components/BackToTopButton'
import ScrollToTop from 'react-scroll-up'

const SkipLink = styled.a`
  position: absolute;
	top: -999vw;
  background: #3E30E0;
	color: #fff;
	padding: .75em 1.5em;
  border-radius: 4px;
	
	&:focus {
		top: 1em;
		left: 50%;
		transform: translate(-50%);
		outline: none;
		box-shadow: 0 0 0 5px hsl(20, 10%, 80%), 0 0 0 10px #3E30E0;
	}
`

const CardList = styled.div`
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
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;
  border: none;
  margin-bottom: 32px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  }
`

if (typeof window !== `undefined`) {
  window.cardsToShow = 10
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    let cardsToShow = 10
    if (typeof window !== `undefined`) {
      cardsToShow = window.cardsToShow
    }

    this.state = {
      showingMore: cardsToShow > 10,
      cardsToShow,
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
    const cards = this.props.data.allContentfulCard.edges.map(e => e.node)

    return(
      <div>
        <SkipLink href="#card-list">Skip to main content</SkipLink>
        <Header />
        <SubmitForm />
        <CardList id="card-list" tabIndex="-1">
          {cards.slice(0, this.state.cardsToShow).map(card => (
            <Card key={card.text} data={card.text} date={card.date} />
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
          )}
        </CardList>
        <ScrollToTop showUnder={160}>
          <BackToTopButton />
        </ScrollToTop>
      </div>
    )
  }
}

export default IndexPage
