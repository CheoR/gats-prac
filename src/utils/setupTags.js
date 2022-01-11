const setupTags = ( recipes ) => {
  const allTags = {}

  recipes.forEach(( recipe ) => {
    recipe?.content?.tags.forEach(( tag ) => {
      if ( allTags[tag] ) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((prev, curr) => {
    const [firstTag] = prev
    const [secondTag] = curr
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
