import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2;
  justify-items: center;
  margin: 32px 0;
`

const Button = styled.button`
  justify-self: end;
  font-weight: 600;
  color: #FFF;
  text-transform: uppercase;
  background: #3E30E0;
  padding: 18px 32px;
  border-radius: 32px;
  text-decoration: none;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  }
`

const FormTextArea = styled.textarea`
  justify-self: center;
  border: 3px solid #07033D;
  height: 40px;
  width: 500px;
  border-radius: 12px;
	padding: 8px;
  outline: none;
  font-size: 18px;
  margin: 12px 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const SubmitForm = () => (
  <FormWrapper>
    <form 
      name="tech-confession"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FormTextArea 
        id="confession" 
        name="confession" 
        placeholder="I spend most of my day flipping between Netflix and Slack. 🤷‍"
        >
      </FormTextArea>
      <br />
      <Button type="submit">Submit Yours</Button>
    </form>
  </FormWrapper>
)

export default SubmitForm