const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
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
  `)

  if (markdownQueryResult.errors) {
    console.log(markdownQueryResult.errors)
    throw markdownQueryResult.errors
  }


  const posts = markdownQueryResult.data.allMarkdownRemark.edges.sort((a, b) => {
    return (
      Number(a.node.frontmatter.position) - Number(b.node.frontmatter.position)
    )
  })

  const projectPosts = posts.filter(
    item => item.node.frontmatter.category === "project-post"
  )

  const blogPosts = posts.filter(
    item => item.node.frontmatter.category === "blog-post"
  )

  projectPosts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {
        prev: index === 0 ? null : projectPosts[index - 1].node,
        next: index === (projectPosts.length - 1)
            ? null
            : projectPosts[index + 1].node,
      },
    })
  })

  blogPosts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {
        prev: index === 0 ? null : blogPosts[index - 1].node,
        next: index === (blogPosts.length - 1)
            ? null
            : blogPosts[index + 1],
      },
    })      
  })
}
