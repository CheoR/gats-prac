import React from 'react'

import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import big from '../assets/images/big.jpg'

const Images = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/big.jpg"
        alt="big food image"
      />
      <StaticImage
        src="https://raw.githubusercontent.com/john-smilga/gatsby-v3-tutorial-recipes/main/src/assets/images/about.jpeg"
        alt="remote hosted about image"
      />
      <h2>Gatsby Image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
