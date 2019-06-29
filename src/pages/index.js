import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

const IndexPage = props => (
  <main>
    <div className={styles.wrapper}>
      <div className={styles.siteTitle}>
        <h1>Ryan O'Shea</h1>
        <p>#development<br />#management #design<br />#berlin</p>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </main>
)

export default IndexPage
