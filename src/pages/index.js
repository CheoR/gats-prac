import React from "react"
import { Link } from "gatsby"
import WrapperLayout from "../components/WrapperLayout"

export default function Home() {
  return (
    <WrapperLayout>
      <h1>Home Page: I now have links Hello World</h1>
    
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
    </WrapperLayout>

  )
}
