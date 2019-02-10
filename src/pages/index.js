import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import SubmitForm from '../components/SubmitForm'
import CardList from '../components/CardList'
import BackToTopButton from '../components/BackToTopButton'
import ScrollToTop from 'react-scroll-up'

import './index.css'

const SkipLink = styled.a`
  position: absolute;
	top: -999vw;
  background: #3E30E0;
	color: #fff;
	padding: .75em 1.5em;
  border-radius: 4px;
  text-decoration: none;
`
export default () => (
  <StaticQuery
    query={graphql`
      query ContentQuery {
        allContentfulAsset {
          edges {
            node {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <title>Tech Confessions</title>
          <meta name="theme-color" content="#fff" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="Description" content="A guilt-free place for us to confess our tech sins 🙏" />
          <meta name="Keywords" content="Silicon Valley, Tech Confessions, Software, Developer, Designer, Tech, Product" />
          <link rel="shortcut icon" href={data.allContentfulAsset.edges[0].node.file.url} />
          <html lang="en" />
        </Helmet>
        <div>
          <SkipLink href="#card-list">Skip to main content</SkipLink>
          <Header />
          <SubmitForm />
          <CardList />
          <ScrollToTop showUnder={160}>
            <BackToTopButton />
          </ScrollToTop>
        </div>
      </div>
    )}
  />
)
