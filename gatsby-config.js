let activeEnv = process.env.ACTIVE_ENV;

if (!activeEnv) {
  activeEnv = "development";
}

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: 'Tech Confessions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.ACCESSTOKEN
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
  ],
}
