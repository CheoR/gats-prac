import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      // note that these are two seperate titles
      // where site.siteMetadata.title is from gatsby-config.
      title={`${title} | ${site.siteMetadata.title}`}
      htmlAttributes={
        {
          lang: "en"
        }
      }
      meta={[
        {
          name: 'description',
          content: metaDescription,
        }
      ]}
    >
      
    </Helmet>
  )
}

export default SEO
