import React from 'react'
import { graphql } from 'gatsby'


import RecepiesList from '../components/RecipiesList'
import WrapperLayout from '../components/WrapperLayout'
import SEO from '../components/SEO'

const TagTemplate = ({ data, pageContext }) => {
  const recepies = data.allContentfulRecipie.nodes

  return (
    <WrapperLayout>
      <SEO title={pageContext.tag} />
      <main className="papge">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recepies">
          <RecepiesList recipes={recepies} />
        </div>
      </main>
    </WrapperLayout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipie(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default TagTemplate
