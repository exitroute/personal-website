/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ryan O'Shea`,
    description: `Website for Ryan O'Shea`,
    author: `Ryan O'Shea`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
