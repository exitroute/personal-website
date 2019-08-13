import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled from "styled-components"

const Title = styled.h2`
  @media (min-width: 992px) {
    text-align: right;
  }
  margin-bottom: 0.25rem;
`
const Role = styled.p`
  && {
    grid-column-start: 1;
    @media (min-width: 992px) {
      text-align: right;
    }
  }
`
const Div = styled.div`
  @media (min-width: 992px) {
    &.wrapper {
      padding-top: 3rem;
      grid-column-start: 2;
    }
  }
`
const PageNav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
`
const PageLink = styled(Link)`
  color: #000;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  padding: 0.5rem;
  border: solid 0.5px;
  border-radius: 3px;
  :hover {
    border: solid 0.5px #85bb65;
    background: #85bb65;
    color: #fff;
    transition-duration: 500ms;
  }
`

export default function projectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <section>
        <Title>{frontmatter.title}</Title>
        <Role>{frontmatter.role}</Role>
        <Div className="wrapper" dangerouslySetInnerHTML={{ __html: html }} />
        <PageNav className="pageNav">
          {prev && <PageLink to={prev.frontmatter.path}>Prev</PageLink>}
          {next && <PageLink to={next.frontmatter.path}>Next</PageLink>}
        </PageNav>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        role
      }
    }
  }
`
