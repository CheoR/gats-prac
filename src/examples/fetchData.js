import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {
          data.site.siteMetadata.complexData.map((item, idx) => {
            return (
              <p key={idx}>
                {item.name}: {item.age}
              </p>
            )
          })
        }
      </div>
    </div>
  )
}

export default ComponentName
