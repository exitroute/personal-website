import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Section from "../components/section"

const BlogContainer = styled.div`
  @media (min-width: 992px) {
    grid-column-start: 2;
  }
  margin: 1rem 0;
  background: #dcdcdc;
  padding: 0.8rem;
  :hover {
    background: #d3d3d3;
  }
`
const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
    transition: 250ms;
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <Section>
      <h2 className="about-header">Blog</h2>
      <div className="wrapper">
        <p>
          Berlin web developer writes about web development, learning 
          web development, and his projects. 
        </p>
        {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.category === "blog-post")
          .map(post => (
            <BlogContainer key={post.node.id}>
              <StyledLink to={post.node.frontmatter.path}>
                <h3>{post.node.frontmatter.title}</h3>
              </StyledLink>
              <p>{post.node.excerpt}</p>
            </BlogContainer>
          ))}
      </div>
    </Section>
  </Layout>
)

export const blogQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            category
            date
            tags
          }
        }
      }
    }
  }
`

export default BlogPage
