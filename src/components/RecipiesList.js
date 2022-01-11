import React from 'react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const RecipiesList = ({ recipes=[] }) => {
  return (
    <div className="recipes-list">
      {
        recipes.map((recipe) => {
          // for in case image not found
          const imagePath = getImage(recipe.image)
          const slug = slugify(recipe.title, { lower: true })
          return (
            <Link
              key={recipe.id}
              to={`/${slug}`}
              className="recipe" 
            >
              <GatsbyImage
                image={imagePath}
                className="recipe-img"
                alt={recipe.title}
              />
              <h5>{recipe.title}</h5>
              <p>
                Prep: {recipe.prepTime}min | Cook: {recipe.cookTime}min
              </p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default RecipiesList
