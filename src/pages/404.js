import React from 'react'
import SEO from '../components/SEO'
import WrapperLayout from '../components/WrapperLayout'

const Error = () => {
  return (
    <WrapperLayout>
      <SEO title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </WrapperLayout>
  )
}

export default Error
