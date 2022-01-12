import React from 'react'
import { graphql, Link } from 'gatsby'
import slugify from 'slugify'

import WrapperLayout from '../components/WrapperLayout'
import setupTags from '../utils/setupTags'
import SEO from '../components/SEO'


const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipie.nodes)

  return (
    <WrapperLayout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {
            newTags.map((tag, idx) => {
              const [text,value] = tag
              const slug = slugify(text, { lower: true })
              return (
                <Link to={`/tags/${slug}`} key={idx} className="tag">
                  <h5>{text}</h5>
                  <p>
                    {value} recipe
                  </p>
                </Link>
              )
            })
          }
        </section>
      </main>
    </WrapperLayout>
  )
}

export const query = graphql`
  {
    allContentfulRecipie {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
