import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import WrapperLayout from "../components/WrapperLayout"
import AllRecipies from "../components/AllRecipies"
import SEO from "../components/SEO"
export default function Home() {
  return (
    <WrapperLayout>
      <SEO title="Home Page" description="I am the home page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src='../assets/images/main.jpeg'
            alt="eggs and flour"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          >
          </StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>just that, simple</h4>
            </div>
          </div>
        </header>
        <AllRecipies />
      </main>
    </WrapperLayout>
  )
}
