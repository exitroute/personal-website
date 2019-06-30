import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Menu from "./menu"

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  margin: 3rem auto 2rem;
  max-width: 600px;
  @media (min-width: 768px) {
    grid-template-columns: 16rem 1fr;
    column-gap: 1rem;
    max-width: 800px;
  }
  @media (min-width: 992px) {
    max-width: none;
  }
  div {
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
    h1 {
      margin-bottom: 0.125rem;
    }
    @media (min-width: 992px) {
        text-align: right;
      }
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
