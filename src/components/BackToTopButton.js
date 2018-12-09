import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  background-color: #3E30E0;
  display: flex;
  align-items: center;
  z-index: 2;
  transition: transform 0.05s linear;
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
  svg {
    outline: none;
    margin: 0 auto;
    display: block;
  }
`

const SROnly = styled.span`
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`

const BackToTopButton = () => (
  <ButtonWrapper>
    <SROnly>Back to the top</SROnly>
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex="-1">
      <path d="M2.50167 31.6177C2.21697 31.872 1.84396 32.0086 1.45987 31.9993C1.07578 31.99 0.710038 31.8355 0.438364 31.5676C0.16669 31.2998 0.00989844 30.9393 0.000452846 30.5606C-0.00899274 30.182 0.129632 29.8143 0.387623 29.5336L14.9429 15.1851C15.2234 14.9092 15.6036 14.7542 15.9999 14.7542C16.3962 14.7542 16.7763 14.9092 17.0569 15.1851L31.6122 29.5336C31.8703 29.8143 32.009 30.182 31.9996 30.5607C31.9901 30.9394 31.8333 31.3 31.5616 31.5679C31.2899 31.8357 30.9241 31.9903 30.54 31.9996C30.1558 32.0088 29.7828 31.8721 29.4981 31.6177L15.9905 18.3204L2.50167 31.6177ZM2.50167 16.8634C2.21697 17.1178 1.84396 17.2544 1.45987 17.2451C1.07578 17.2358 0.710038 17.0812 0.438364 16.8134C0.16669 16.5456 0.00989844 16.185 0.000452846 15.8064C-0.00899274 15.4278 0.129632 15.0601 0.387623 14.7794L14.9429 0.430878C15.2234 0.154955 15.6036 0 15.9999 0C16.3962 0 16.7763 0.154955 17.0569 0.430878L31.6122 14.7794C31.8703 15.06 32.009 15.4278 31.9996 15.8065C31.9901 16.1852 31.8333 16.5458 31.5616 16.8136C31.2899 17.0815 30.9241 17.2361 30.54 17.2453C30.1558 17.2546 29.7828 17.1179 29.4981 16.8634L15.9905 3.56614L2.50167 16.8634Z" fill="white"/>
    </svg>
  </ButtonWrapper>
)

export default BackToTopButton
