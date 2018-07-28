module.exports = {
  siteMetadata: {
    title: 'Tech Confessions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '#',
        accessToken: '#'
      }
    }
  ],
}
