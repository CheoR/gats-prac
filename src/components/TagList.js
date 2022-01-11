import { Link } from 'gatsby'
import React from 'react'
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
            return (
              <Link key={indx} to={`/${text}`}>
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
