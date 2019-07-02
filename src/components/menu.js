import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  transition: all 1s ease-out;
  @media (min-width: 768px) {
    justify-content: flex-end;
    max-width: 600px;
  }
`
const NavList = styled.ul` 
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-left: -0.5rem;
  li {
    margin: 0 2px;
  }
`
const NavLink = styled(AniLink).attrs({
  activeClassName: "active",
  fade: "fade",
})`
  color: #000;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  padding: 0.5rem;
  :hover {
    background: #85bb65;
    color: #fff;
    transition-duration: 500ms;
  }
  &.active {
    background: pink;
    :hover {
      color: #000;
    }
  }
`

const Menu = () => (
  <Nav>
    <NavList>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </NavList>
  </Nav>
)

export default Menu
