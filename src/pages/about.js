import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Section from "../components/section"

const DefList = styled.dl`
  div {
    margin-bottom: 1rem;
    dt::after {
      content: ":";
    }
    dd {
      margin-bottom: 0.15rem;
    }

    @media (min-width: 768px) {
      dt {
        float: left;
        clear: left;
        text-align: right;
        width: 8rem;
      }
      dd {
        margin: 0 0 0 8.5rem;
      }
    }
  }
`

const Link = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    transition: 250ms;
  }
`

const AboutPage = () => (
  <Layout>
    <Section>
      <h2>About</h2>
      <p>
        Ryan O'Shea is a trained web developer living and working in Berlin.
      </p>
      <p>
        He loves learning and fixing things. Web development gives him daily
        satisfaction since there is always something broken, buggy or new to
        learn.
      </p>
      <p>
        Before web development, Ryan had a 12 year career in edtech with&nbsp;
        <Link
          href="https://www.wallstreetenglish.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wall Street English
        </Link>{" "}
        and&nbsp;
        <Link
          href="https://www.pearson.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pearson
        </Link>{" "}
        as a manager and trainer.
      </p>
      <p>
        He also has a education and training in architectural design from
        the&nbsp;
        <Link
          href="https://www.strath.ac.uk/engineering/architecture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Strathcylde
        </Link>{" "}
        in Glasgow.
      </p>
      <p>
        <b>Fun fact</b>: if he's running a workshop with a warm-up where the
        introduction needs a "fun fact", he usually says something about:&nbsp;
        <Link
          href="https://en.wikipedia.org/wiki/Sandor_Clegane"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandor Clegane
        </Link>
        ,&nbsp;
        <Link
          href="https://youtu.be/XJFPuz3MXho?t=12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pete Doherty
        </Link>
        , or&nbsp;
        <Link
          href="https://youtu.be/LeMSz2v46Ok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Max Zander
        </Link>
        .
      </p>
    </Section>
    <Section>
      <h2>Tech Stack</h2>
      <DefList>
        <div>
          <dt>Core</dt>
          <dd>HTML5, CSS3, Javascript</dd>
        </div>
        <div>
          <dt>Client-side</dt>
          <dd>SASS, Bootstrap 4, styled-components, React, Redux</dd>
        </div>
        <div>
          <dt>Server-side</dt>
          <dd>Node, Express, MongoDB, Mongoose</dd>
        </div>
        <div>
          <dt>Dev Tools</dt>
          <dd>Ubuntu, MacOS, VSCode, Bash, Git, Git Kracken</dd>
        </div>
        <div>
          <dt>Deployment</dt>
          <dd>Gatsby, Netlify, Now, Next</dd>
        </div>
        <div>
          <dt>Methods</dt>
          <dd>Scrum, Kanban, Wardley Maps</dd>
        </div>
      </DefList>
    </Section>
    <Section>
      <h2>Resume</h2>
      <p>
        This is the short version of Ryan's career and is optimised to support
        your decision making process. For more depth see the&nbsp;
        <Link
          href="https://exitroute.github.io/resume/?token=1973"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume App
        </Link>{" "}
        or his{" "}
        <Link
          href="https://linkedin.com/in/ryanjamesoshea/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </Link>{" "}
        page.
      </p>
      <DefList>
        <div>
          <dt>Development</dt>
          <dd>July 2018 - July 2019</dd>
          <dd>Web Development Trainee</dd>
          <dd>
            <Link
              href="https://digitalcareerinstitute.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Career Institute
            </Link>
            , Berlin
          </dd>
        </div>
        <div>
          <dt>Management</dt>
          <dd>September 2005 - December 2016</dd>
          <dd>School Manager</dd>
          <dd>Wall Street Institute, Berlin</dd>
        </div>
        <div>
          <dt>Design</dt>
          <dd>October 1994 - June 1999</dd>
          <dd>BSc Architectural Studies</dd>
        </div>
      </DefList>
    </Section>
  </Layout>
)

export default AboutPage
