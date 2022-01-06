import React from 'react'
import { graphql } from 'gatsby'

const testing = (props) => {
  console.log(props)
  const author = props.data.site.info.author
  return (
    <div>
      <h2>TestingCol</h2>
      <p>{author}</p>
    </div>
  )
}

export const data = graphql`
{
    site {
      info:siteMetadata {
        author
        person {
          age
          name
        }
        description
        simpledata
        title
        complexData {
          age
          name
        }
      }
    }
  }
`
export default testing
