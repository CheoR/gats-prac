import React from 'react'
import { graphql } from 'gatsby'

const RecepieTemplate = (props) => {
  return (
    <div>
      <h4>Recepie: {props.params.title}</h4>
    </div>
  )
}

export const query = graphql`
  query getSingleRecepie($title:String) {
    allContentfulRecipie(filter: {title: {eq: $title}}) {
      nodes {
        title
        cookTime
      }
    }
}
`

export default RecepieTemplate
