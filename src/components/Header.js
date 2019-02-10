import React from 'react'
import styled from 'styled-components'

const HeaderGroup = styled.div`
  display: grid;
  grid-template-columns: center;
  justify-items: center;
  margin-top: 64px;
`

const HeaderTitle = styled.h1`
  font-weight: 900;
  font-size: 72px;
  text-align: center;
  margin: 24px 0;

  @media (max-width: 640px) {
    font-size: 56px;
  }
`

const HeaderSubTitle = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 0;
  padding: 0 18px;
`

const Header = () => (
  <HeaderGroup>
    <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8 0.635571C12.2 -0.064429 11 -0.264426 10.2 0.435574L0.700001 8.33557C0.300001 8.63557 0 9.23557 0 9.73557C0 10.2356 0.200001 10.8356 0.700001 11.1356L10.2 19.0356C10.5 19.3356 10.9 19.4356 11.4 19.4356C11.9 19.4356 12.5 19.2356 12.8 18.7356C13.4 17.9356 13.3 16.8356 12.6 16.1356L4.8 9.63557L12.6 3.13557C13.3 2.53557 13.4 1.43557 12.8 0.635571Z" transform="translate(25.8 38.9644)" fill="#3E30E0"/>
      <path d="M12.5681 8.29397L3.06811 0.393971C2.36811 -0.206029 1.16811 -0.106028 0.468112 0.593972C-0.131888 1.39397 -0.031887 2.49397 0.668113 3.19397L8.46811 9.69397L0.668113 16.194C-0.131887 16.794 -0.231888 17.994 0.468112 18.794C0.768112 19.194 1.36811 19.494 1.86811 19.494C2.26811 19.494 2.66811 19.294 3.06811 19.094L12.5681 11.194C12.9681 10.894 13.2681 10.294 13.2681 9.79397C13.1681 9.09397 12.9681 8.59397 12.5681 8.29397Z" transform="translate(57.6319 39.606)" fill="#3E30E0"/>
      <path d="M12.3865 0.0780391C11.3865 -0.221961 10.3865 0.378036 10.0865 1.27804L0.0864647 33.478C-0.213535 34.478 0.286466 35.478 1.28647 35.778C1.48647 35.878 1.68647 35.878 1.78647 35.878C2.58647 35.878 3.28647 35.378 3.48647 34.578L13.4865 2.37804C13.8865 1.37804 13.2865 0.378039 12.3865 0.0780391Z" transform="translate(40.9135 31.322)" fill="#3E30E0"/>
      <path d="M49 0C22 0 0 22 0 49C0 57.6 2.3 66 6.6 73.5L6.8 73.8L2.4 88.8C1.8 90.7 2.4 92.8 3.8 94.2C5.2 95.6 7.3 96.1 9.2 95.6L24.3 91.3L24.6 91.5C32 95.7 40.4 98 48.9 98C75.9 98 97.9 76 97.9 49C97.9 22 76 0 49 0ZM49 94.1C40.7 94.1 32.7 91.8 25.6 87.6L24.9 87.2L8.2 92C7.6 92.2 7 92 6.5 91.6C6.1 91.2 5.9 90.5 6.1 89.9L10.9 73.3L10.5 72.6C6.1 65.4 3.8 57.3 3.8 49C3.8 24.1 24.1 3.8 49 3.8C73.9 3.8 94.2 24.1 94.2 49C94.2 73.9 73.9 94.1 49 94.1Z" fill="#3E30E0"/>
    </svg>
    <HeaderTitle>Tech Confessions</HeaderTitle>
    <HeaderSubTitle>A guilt-free place for us to confess our tech sins <span role="img" aria-label="prayer hands emoji">🙏</span></HeaderSubTitle>
  </HeaderGroup>
)

export default Header
