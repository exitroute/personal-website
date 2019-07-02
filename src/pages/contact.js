import React from "react"
import styled from "styled-components"

import Section from "../components/section"
import Layout from "../components/layout"


const ContactList = styled.ul`
  list-style: none;
`
const A = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    transition: 250ms;
  }
`

const ContactPage = () => (
  <Layout>
    <Section>
      <h2>Contact</h2>
      <div className="wrapper">
        <p>Ryan loves to hear from new people!</p>
        <p>
          Drop him a line at:&nbsp;
          <a href="mailto: ryan.oshea@exitroute.org">
            ryan.oshea@exitroute.org
          </a>
        </p>
        <p>Or at these social media platroms:</p>
        <ContactList>
          <li>
            Github:{" "}
            <A href="https://github.com/exitroute">@exitroute</A>
          </li>
          <li>Linkedin{" "}
            <A href="https://github.com/exitroute">@ryanjamesoshea</A></li>
        </ContactList>
      </div>
    </Section>
  </Layout>
)

export default ContactPage
