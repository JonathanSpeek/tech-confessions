import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import IndexPage from '../pages/index'

import './index.css'

const Layout = ({ data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
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
    allContentfulCard {
      edges {
        node {
          text
        }
      }
    }
  }
`
