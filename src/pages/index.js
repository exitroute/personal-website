import React from "react"
import styles from "./index.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = props => (
  <main>
    <div className={styles.wrapper}>
      <div className={styles.siteTitle}>
        <h1>Ryan O'Shea</h1>
        <p>
          #development
          <br />
          #management #design
          <br />
          #berlin
        </p>
      </div>
      <ul className={styles.nav}>
        <li>
          <AniLink fade to="/about" duration={0.2}>
            About
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/projects" duration={0.2}>
            Projects
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/blog" duration={0.2}>
            Blog
          </AniLink>
        </li>
      </ul>
    </div>
  </main>
)

export default IndexPage
