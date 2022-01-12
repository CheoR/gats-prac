import React from 'react'
import AllRecipies from '../components/AllRecipies'
import WrapperLayout from '../components/WrapperLayout'
import SEO from '../components/SEO'

const Recipes = () => {
  return (
    <WrapperLayout>
      <SEO title="Recipes" />
      <h1>Recepies Page</h1>
      <main className="page">
        <AllRecipies />
      </main>
    </WrapperLayout>
  )
}

export default Recipes
