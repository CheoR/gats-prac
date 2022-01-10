import React from 'react'
import AllRecipies from '../components/AllRecipies'
import WrapperLayout from '../components/WrapperLayout'

const Recipes = () => {
  return (
    <WrapperLayout>
      <h1>Recepies Page</h1>
      <main className="page">
        <AllRecipies />
      </main>
    </WrapperLayout>
  )
}

export default Recipes
