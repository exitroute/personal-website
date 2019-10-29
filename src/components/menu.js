import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
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
const NavLink = styled(Link).attrs({
  activeClassName: "active",
})`
  color: #000;
  font-size:calc(0.7em + 0.5vw);
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  padding: 0.5rem;
  border-radius: 3px;
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
  @media (min-width: 992px) {
    font-size: 1em;
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
