import React from "react"
import styled from "styled-components"

const A = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    transition: 250ms;
  }
`
const Anchor = () => (
  <A
    target="_blank"
    rel="noopener noreferrer"
  >
  </A>
)

export default Anchor
