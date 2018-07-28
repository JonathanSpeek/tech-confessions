module.exports = {
  siteMetadata: {
    title: 'Tech Confessions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.ACCESSTOKEN
      }
    }
  ],
}
