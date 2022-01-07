import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: DOMINANT_COLOR
            transformOptions: {grayscale: true}
            width: 200
            height: 200
          )
        }
      }
    }
  }
`


const Wrapper = styled.section`
  background: lightblue;
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  console.log(data)

  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {
        nodes.map((img, indx) => {
          const imgPath = getImage(img.childImageSharp.gatsbyImageData)
          return (
            <article key={indx} className="item">
              <GatsbyImage
                image={imgPath}
                alt={img.name}
                className="gallery-img"
              />
              <p>{ img.name }</p>
            </article>
          )
        })
      }
    </Wrapper>
  )
}

export default Gallery
