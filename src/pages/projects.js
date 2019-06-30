import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Section from "../components/section"

const ProjectContainer = styled.div`
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
  color: #000;
  text-decoration: none;
  :hover {
    text-decoration-line: underline;
  }
`

const ProjectsPage = ({ data }) => (
  <Layout>
    <Section>
      <h2>Projects</h2>
      <div className="wrapper">
        <p>
          Here's what I have been working on over the last year or so.
        </p>
        <p>
          This list includes work that I did before I learned how to code but was 
          working on websites anyway.
        </p>
        {data.allMarkdownRemark.edges
          .filter(
            project => project.node.frontmatter.category === "project-post"
          )
          .map(project => (
            <ProjectContainer key={project.node.id}>
              <StyledLink to={project.node.frontmatter.path}>
                <h3>{project.node.frontmatter.title}</h3>
              </StyledLink>
              <p>{project.node.excerpt}</p>
            </ProjectContainer>
          ))}
      </div>
    </Section>
  </Layout>
)

export const projectQuery = graphql`
  query projectIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            date
            title
            category
          }
        }
      }
    }
  }
`

export default ProjectsPage
