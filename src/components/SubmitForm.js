import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2;
  justify-items: center;
  margin: 32px 0;
  @media (max-width: 640px) {
    margin: 0;
  }
`

const Button = styled.button`
  font-weight: 600;
  color: #FFF;
  text-transform: uppercase;
  background: #3E30E0;
  padding: 18px 32px;
  border-radius: 32px;
  text-decoration: none;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  transition: transform 0.05s linear;
  outline: none;
  border: none;
  &::-moz-focus-inner {
    border: 0;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  }
  &:focus {
		outline: 2px dotted #3E30E0;
	}
`

const CloseButton = styled.button`
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
  margin-right: 16px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &:focus {
		outline: 2px dotted #3E30E0;
	}
`

const FormLabel = styled.label`
  display: block;
  font-size: .9em;
  padding: 0 0 4px 4px;
  font-weight: 600;
  text-transform: uppercase;
`

const FormInput = styled.input`
  justify-self: center;
  border: 2px solid #07033D;
  width: 500px;
  border-radius: 12px;
	padding: 12px;
  outline: none;
  font-size: 18px;
  margin: 12px 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  &:focus {
    outline: none;
    border-color: #3E30E0;
  }
  @media (max-width: 640px) {
    width: 340px;
  }
`

class SubmitForm extends React.Component {
  state = {
    active: false
	}

  render() {
    return (
      <FormWrapper>
        <Button id="open-form"
          onClick={() => this.setState({active: true})}
          style={{display: this.state.active ? 'none' : 'block'}}
        >
          Submit yours
        </Button>
        <form
          name="tech-confession"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id="form"
          style={{display: this.state.active ? 'block' : 'none'}}
        >
          <FormLabel htmlFor="confession">Your Confession</FormLabel>
          <FormInput
            id="confession"
            name="confession"
            type="text"
            placeholder="I spend most of my day flipping between Netflix and Slack. 🤷‍"
            required
            aria-required="true"
            minLength="10"
            maxLength="240"
          />
          <input type="hidden" name="form-name" value="tech-confession" />
          <br />
          <CloseButton onClick={() => this.setState({active: false})}>Cancel</CloseButton>
          <Button type="submit">Confess</Button>
        </form>
      </FormWrapper>
    )
  }
}

export default SubmitForm