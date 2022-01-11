import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import slugify from 'slugify'

import WrapperLayout from '../components/WrapperLayout'

const RecepieTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image
  } = data.contentfulRecipie

  const { tags, instructions, ingredients, tools } = content

  const imagePath = getImage(image)

  return (
    <WrapperLayout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={imagePath}
              alt={title}
              className='about-img'
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags: 
                {
                  tags.map((tag, idx) => {
                    const slug = slugify(tag, { lower: true })
                    return (
                      <Link to={`/tags/${slug}`} key={idx} >
                        {tag}
                      </Link>
                    )
                  })
                }
              </p>
            </article> 
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {
                ingredients.map((item, idx) => {
                  return (
                    <div key={idx} className="single-instruction">
                      <header>
                        <p>step {idx + 1} </p>
                        <div></div>
                      </header>
                      <p>{item}</p>
                    </div>
                  )
                })
              }
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {
                  ingredients.map((item, idx) => {
                    return (
                      <p key={idx} className="single-ingredient">
                        {item}
                      </p>
                    )
                  })
                }
              </div>
              <div>
                <h4>tools</h4>
                {
                  tools.map((item, idx) => {
                    return (
                      <p key={idx} className="single-tools">
                        {item}
                      </p>
                    )
                  })
                }
              </div>
            </article>
          </section>
        </div>
      </main>
    </WrapperLayout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipie(title: {eq: $title}) {
      title
      cookTime
      prepTime
      content {
        tags
        ingredients
        instructions
        tools
      }
      description {
        description
      }
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecepieTemplate
