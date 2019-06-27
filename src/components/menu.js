import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  @media (min-width: 768px) and (max-width: 992px) {
    justify-content: flex-end;
  }
`
const NavList = styled.ul`
  
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-left: 0rem;

  li {
    margin: 0 2px;
  }

  @media (min-width: 992px) {
    margin-left: 0.5rem;
  }
`
const NavLink = styled(Link).attrs({
  activeClassName: "active",
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
