import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import styled from "styled-components"

import Menu from "./menu"

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  margin: 3rem auto 2rem;
  max-width: 600px;
  transition: all 1s ease-in-out;
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
const TitleAniLink = styled(AniLink)`
  color: #000;
  :hover {
    color: #85bb65;    
  }
  text-decoration: none;
`

const Header = () => (
  <header>
    <Wrapper>
      <div>
        <h1>
          <TitleAniLink fade to="/" duration={0.2}>Ryan O'Shea</TitleAniLink>
        </h1>
        <small>#dvlpmnt #mngmnt #dsgn</small>
      </div>
      <Menu />
    </Wrapper>
  </header>
)

export default Header
