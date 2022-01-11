import { Link } from 'gatsby'
import React from 'react'
import slugify from 'slugify'
import setupTags from '../utils/setupTags'

const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {
          newTags.map((tag, indx) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link key={indx} to={`/tags/${slug}`}>
                {text} ({value})
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default TagList
