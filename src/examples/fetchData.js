import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


const getData = graphql`
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
function FetchData() {

  const { 
    site: { 
      info: { 
        title, 
        person 
      }
    } 
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>HolaCola FetchData</h1>
      <p>Title: { title }</p>
<p></p>
      <p>Name is : {person.name}</p>
    </div>
  )
}

export default FetchData
