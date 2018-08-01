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
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
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
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;
  border: none;
  margin-right: 16px;
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
  @media (max-width: 640px) {
    width: 340px;
  }
`

class SubmitForm extends React.Component {
  constructor(props) {
		super(props)
		this.state = {active: false}
	}

	open = () => (
    this.setState({active: true})
  )

  close = () => (
    this.setState({active: false})
  )
  
  render() {
    return (
      <FormWrapper>
        <Button id="open-form" 
          onClick={this.open.bind(this)}
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
          <FormTextArea 
            id="confession" 
            name="confession" 
            placeholder="I spend most of my day flipping between Netflix and Slack. 🤷‍"
            >
          </FormTextArea>
          <br />
          <CloseButton onClick={this.close.bind(this)}>Cancel</CloseButton>
          <Button type="submit">Confess</Button>
        </form>
      </FormWrapper>
    )
  }
}

export default SubmitForm