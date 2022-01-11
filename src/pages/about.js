import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'

import WrapperLayout from '../components/WrapperLayout'
import RecipiesList from '../components/RecipiesList'

const About = ({ data: { allContentfulRecipie: { nodes: recipes }} }) => {
  return (
    <WrapperLayout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Page</h2>
            <p>
              Enamel pin whatever gentrify tofu DIY wayfarers. Trust fund fashion axe knausgaard franzen meditation kinfolk enamel pin sustainable pour-over aesthetic air plant before they sold out. Synth williamsburg enamel pin banh mi. Street art umami pop-up, adaptogen 8-bit chia prism kombucha seitan. Deep v jianbing cardigan master cleanse tote bag celiac twee.
            </p>
            <p>
              Aesthetic tumblr everyday carry scenester disrupt freegan tbh helvetica cloud bread. Stumptown beard scenester roof party neutra keffiyeh, edison bulb banh mi lo-fi austin asymmetrical iPhone.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Hand pouring salt on onion and garlic chips in bowl"
            className="about-img"
            placeholder='tracedSVG'
          />
        </section>
        <section className="featured-recipes">
          <h5>simple and delicous</h5>
          <RecipiesList recipes={recipes} />
        </section>
      </main>
    </WrapperLayout>
  )
}

export const query = graphql`
  {
    allContentfulRecipie(
      filter: {featured: {eq: true}}
      sort: {order: ASC, fields: title}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        content {
          tags
        }
      }
    }
  }
`

export default About
