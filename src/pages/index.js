import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div>
    <h1>I now have links Hello World</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <div>
      <Link to="/about">About</Link>
    </div>
    <div>
      <Link to="/company/history">History</Link>
    </div>
    <div>
      <Link to="/history">Broken company history link</Link>
    </div>

    <div>
      <a href="/about">a-tag internal link to about</a>
    </div>
    <div>
      <a href="http://www.gatsbyjs.com/docs/how-to">
        a-tag External Link to how to docs
      </a>
    </div>

  </div>
}
