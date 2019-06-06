import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h2>About RüDev</h2>
    <p>RüDev makes websites and develops products for clients.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias tenetur amet quo repellendus fugit, labore nostrum accusantium, officia fuga earum iusto inventore iste assumenda harum quaerat perspiciatis, necessitatibus animi a!</p>
    <h2>About Ryan</h2>
    <p>Ryan O'Shea makes websites and develops products for clients.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, assumenda dolorum. Delectus dignissimos non deserunt laborum tempore ipsa voluptatibus eum quisquam perspiciatis asperiores. Consequatur alias aperiam quo fuga dolore nostrum?</p>
    <Link to="/">Go to index</Link>
  </Layout>
)

export default AboutPage