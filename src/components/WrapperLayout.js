import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const WrapperLayout = ({ children }) => {
  return (
    <>
      <Navbar />
        { children }
      <Footer />
    </>
  )
}

export default WrapperLayout
