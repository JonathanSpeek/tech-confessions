import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import SubmitButton from '../components/SubmitButton';
import Card from '../components/Card';

const CardList = styled.div`
  margin-top: 64px 18px 18px 24px;
  display: grid;
  grid-template-columns: 1;
  justify-items: center;
`

const IndexPage = (data) => (
  <div>
    <Header />
    <SubmitButton />
    <CardList>{data.data.allContentfulCard.edges.map(edge => (
      <Card data={edge.node.text} date={edge.node.date} />
    ))}
    </CardList>
  </div>
)

export default IndexPage
