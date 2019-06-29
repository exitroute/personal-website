import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Menu from "./menu"

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  div {
    h1 {
      margin-bottom: 0.125rem;
    }
    @media (min-width: 992px) {
        text-align: right;
      }
  }
  @media (min-width: 768px) {
    grid-template-columns: 16rem 1fr;
    column-gap: 1rem;
  }
`
const TitleLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const Header = () => (
  <header>
    <Wrapper>
      <div>
        <h1>
          <TitleLink to="/">Ryan O'Shea</TitleLink>
        </h1>
        <small>#dvlpmnt #mngmnt #dsgn</small>
      </div>
      <Menu />
    </Wrapper>
  </header>
)

export default Header
