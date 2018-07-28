import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: center;

  a {
    font-weight: 600;
    color: #FFF;
    text-transform: uppercase;
    background: #3E30E0;
    padding: 18px 32px;
    border-radius: 32px;
    text-decoration: none;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  a:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  }
`

const SubmitButton = () => (
  <ButtonWrapper>
    <Link to="/submit-confession/">Submit Yours</Link>
  </ButtonWrapper>
)

export default SubmitButton