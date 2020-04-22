import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import SEO from "./SEO"
import Header from "./header"
import Footer from "./footer"

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  header,
  main,
  footer {
    padding: 0px 1.0875rem 1.45rem;
    section {
      max-width: 600px;
      margin: 0 auto 3.5rem;
      @media (min-width: 992px) {
        max-width: none;
        display: grid;
        grid-template-columns: 16rem minmax(auto, 600px);
        grid-auto-rows: auto;
        column-gap: 1rem;
        grid-column-start: 2;
        .wrapper {
          grid-row-start: 2;
          grid-column-start: 2;
        }
        .about-header {
          justify-self: end;
          grid-column: 1 / 1;
          margin-bottom: 0;
        }
      }
    }
  }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO />
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
