import React from 'react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const RecipiesList = ({ recipes=[] }) => {
  return (
    <div className="recipes-list">
      {
        recipes.map((recipe) => {
          // for in case image not found
          const imagePath = getImage(recipe.image)
          return (
            <Link
              key={recipe.id}
              to={`/${recipe.title}`}
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
