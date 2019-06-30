import React from "react"

import Section from "../components/section"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <Section>
      <h2>Contact</h2>
      <p>Ryan loves to hear from new people!</p>
      <p>
        Drop him a line at:&nbsp;
        <a href="mailto: ryan.oshea@exitroute.org">ryan.oshea@exitroute.org</a>
      </p>
      <p>Or at these social media platroms:</p>
      <ul>
        <li>Github</li>
        <li>Linkedin</li>
      </ul>
    </Section>
  </Layout>
)

export default ContactPage
