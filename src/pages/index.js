import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'

const IndexPage = () => (
  <div>
    <Header />
    <Link to="/submit-confession/">Submit Yours</Link>
  </div>
)

export default IndexPage
