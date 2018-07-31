import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import IndexPage from '../pages/index'

import './index.css'

const Layout = ({ data }) => (
  <div>
    {console.log(data)}
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="Description" content="A guilt-free place for us to confess our tech sins 🙏" />
      <meta name="Keywords" content="Silicon Valley, Tech Confessions, Software, Developer, Designer, Tech, Product" />
      <link rel="shortcut icon" href={data.allContentfulAsset.edges[0].node.file.url} />
    </Helmet>
    <div>
      <IndexPage data={data} />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
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
    allContentfulCard {
      edges {
        node {
          text
          date
        }
      }
    }
  }
`
