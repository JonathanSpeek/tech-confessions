import React from 'react'
import styled from 'styled-components'
import TwitterButton from './TwitterButton'

const CardWrapper = styled.div`
  width: 500px;
  border-radius: 12px;
  background-color: #FAFAFA;
  padding: 18px 32px;
  margin: 24px 0;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  display: grid;
  grid-template-rows: 1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 640px) {
    width: 300px;
  }
`

const CardDate = styled.p`
  font-weight: 800;
`

const CardText = styled.p`
  line-height: 1.4;
  margin-top: 8px;
`

const Card = ({data, date}) => (
  <CardWrapper>
    <CardDate>{date}</CardDate>
    <CardText>{data}</CardText>
    <TwitterButton data={data} />
  </CardWrapper>
)

export default Card