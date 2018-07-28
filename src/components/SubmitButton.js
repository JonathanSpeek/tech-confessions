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
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  }
`

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
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
        <Modal open={open} onClose={this.onCloseModal} center>
          <ModalTitle>Send us your tech confession 👯</ModalTitle>
        </Modal>
      </ButtonWrapper>
    )
  }
}

export default SubmitButton