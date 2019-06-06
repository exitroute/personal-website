import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ProjectsPage = () => (
  <Layout>
    <section>
      <h2>Projects by RüDev</h2>
      <p>Welcome to the project portfolio of Rüdev. Check out the ResumeBot!</p>
    </section>
    <Link to="/">Go to index</Link>
  </Layout>
)

export default ProjectsPage
