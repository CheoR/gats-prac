import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


const getData = graphql`
  {
    site {
      siteMetadata {
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
function FetchData() {

  const data = useStaticQuery(getData)

  return (
    <div>
      <h1>HolaCola FetchData</h1>
      Name is : {data.site.siteMetadata.person.name}
    </div>
  )
}

export default FetchData
