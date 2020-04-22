/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ryan O'Shea",
    description: "Website for Ryan O'Shea",
    author: "Ryan O'Shea",
    image: "/src/static/38537609.jpeg",
    url: "https://www.ryanoshea.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-plugin-transition-link",
  ],
}
