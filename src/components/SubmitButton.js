import React from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal';

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-items: center;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  }
`

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`

const ModalTextArea = styled.textarea`
  border: 3px solid #07033D;
  height: 200px;
  width: 95%;
  border-radius: 12px;
	padding: 8px;
  outline: none;
  font-size: 18px;
  margin: 12px 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

class SubmitButton extends React.Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return(
      <ButtonWrapper>
        <Button onClick={this.onOpenModal}>Submit Yours</Button>
        <Modal 
          open={open} 
          onClose={this.onCloseModal} 
          center
          classNames={{ modal: 'custom-modal' }}
          >
          <ModalTitle>Send us your tech confession 👯</ModalTitle>
          <form 
            name="tech-confession"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <ModalTextArea 
              id="confession" 
              name="confession" 
              placeholder="I spend most of my day flipping between Netflix and Slack. 🤷‍"
              >
            </ModalTextArea>
            <Button type="submit">Send</Button>
          </form>
        </Modal>
      </ButtonWrapper>
    )
  }
}

export default SubmitButton