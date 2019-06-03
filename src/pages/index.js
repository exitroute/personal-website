import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

const IndexPage = props => (
  <main>
    <div className={styles.wrapper}>
      <div className={styles.siteTitle}>
        <h1>RüDev</h1>
        <p>Web Development From Berlin</p>
        <p>#ryanjamesoshea</p>
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
