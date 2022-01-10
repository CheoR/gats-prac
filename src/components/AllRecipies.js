import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import RecipiesList from './RecipiesList'
import TagList from './TagList'

export const query = graphql`
  {
    allContentfulRecipie {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipies = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipie.nodes
  console.log(recipes)

  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipiesList recipes={recipes} />
      
    </section>
  )
}

export default AllRecipies
