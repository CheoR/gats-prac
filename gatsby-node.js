const path = require('path')
const slugify = require('slugify')

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipie {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipie.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      const slug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${slug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
