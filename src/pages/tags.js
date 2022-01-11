import React from 'react'
import { graphql, Link } from 'gatsby'
import WrapperLayout from '../components/WrapperLayout'
import setupTags from '../utils/setupTags'


const Tags = ({ data }) => {
  console.log('in tags')
  console.log(data)
  console.log('---------')
  const newTags = setupTags(data.allContentfulRecipie.nodes)

  return (
    <WrapperLayout>
      <main className="page">
        <section className="tags-page">
          {
            newTags.map((tag, idx) => {
              const [text,value] = tag
              return (
                <Link to={`/${text}`} key={idx} className="tag">
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
