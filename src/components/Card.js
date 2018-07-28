import React from 'react'
import styled from 'styled-components'
import TwitterButton from './TwitterButton';

const CardWrapper = styled.div`
  max-width: 500px;
  border-radius: 24px;
  padding: 18px 32px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  display: grid;
  grid-template-rows: 1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const CardDate = styled.p`
  font-weight: 800;
`

const CardText = styled.p`
  line-height: 1.4;
  margin-top: 8px;
`

const Card = () => (
  <CardWrapper>
    <CardDate>July 27, 2018</CardDate>
    <CardText>I take my growler with me on Fridays to fill it up from our beer tap. So far I haven’t been caught 🤞</CardText>
    <TwitterButton />
  </CardWrapper>
)

export default Card