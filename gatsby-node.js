const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              category
              date
              position
              tags
            }
          }
        }
      }
    }
  if (markdownQueryResult.errors) {
    console.log(markdownQueryResult.errors)
    throw markdownQueryResult.errors
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.category === "blog-post") {
        createPage({
          path: node.frontmatter.path,
          component: blogTemplate,
          context: {}, // additional data can be passed via context
        })
      } else {
        createPage({
          path: node.frontmatter.path,
          component: projectTemplate,
          context: {}, // additional data can be passed via context
        })
      }
    })
  })
}
