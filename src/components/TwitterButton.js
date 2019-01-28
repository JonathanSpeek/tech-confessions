import React from 'react'
import styled from 'styled-components'

const TwitterWrapper = styled.a`
  cursor: pointer;
  justify-self: end;
  border: none;
  background: none;
  padding: .5em;
  &:focus {
		outline: 2px dotted #3E30E0;
	}
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
  &::-moz-focus-inner {
    border: 0;
  }
  svg {
    outline: none;
    transition: transform 0.3s linear;
  }
`

const SROnly = styled.span`
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`

const TwitterButton = ({data}) => (
  <TwitterWrapper
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Share on Twitter"
    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://confessions.tech')}&text="${encodeURIComponent(data)}"`}>
    <SROnly>Share on Twitter</SROnly>
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.1015 6.38438L14.1645 7.42244L13.1152 7.29533C9.29608 6.80808 5.95956 5.15564 3.12667 2.3804L1.7417 1.00337L1.38497 2.02025C0.629531 4.28706 1.11217 6.68097 2.686 8.29103C3.52538 9.1808 3.33652 9.30791 1.88859 8.77829C1.38497 8.60881 0.944297 8.4817 0.902328 8.54525C0.755438 8.69355 1.25906 10.6214 1.65777 11.384C2.20336 12.4433 3.31553 13.4814 4.53263 14.0957L5.56086 14.583L4.34377 14.6042C3.16864 14.6042 3.12667 14.6254 3.25258 15.0702C3.67227 16.4473 5.33003 17.909 7.17666 18.5446L8.47769 18.9895L7.34453 19.6674C5.66578 20.6419 3.69325 21.1927 1.72072 21.2351C0.776422 21.2563 0 21.341 0 21.4046C0 21.6164 2.56009 22.8028 4.04999 23.2689C8.51966 24.6459 13.8287 24.0527 17.8157 21.7012C20.6486 20.0275 23.4815 16.7015 24.8035 13.4814C25.517 11.7654 26.2305 8.62999 26.2305 7.12585C26.2305 6.15134 26.2934 6.02423 27.4686 4.85905C28.161 4.18113 28.8116 3.43965 28.9375 3.2278C29.1473 2.82529 29.1263 2.82529 28.0561 3.18543C26.2724 3.82098 26.0206 3.73624 26.902 2.78292C27.5525 2.10499 28.3289 0.876262 28.3289 0.516116C28.3289 0.45256 28.0141 0.558486 27.6574 0.749151C27.2797 0.961002 26.4403 1.27878 25.8108 1.46944L24.6776 1.82959L23.6494 1.13048C23.0828 0.749151 22.2854 0.32545 21.8657 0.19834C20.7955 -0.098251 19.1587 -0.0558809 18.1935 0.28308C15.5704 1.23641 13.9126 3.69387 14.1015 6.38438Z" fill="#3E30E0"/>
    </svg>
  </TwitterWrapper>
)

export default TwitterButton
