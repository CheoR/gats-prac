import React from 'react'
import WrapperLayout from '../components/WrapperLayout'
import { page, text } from "../examples/about.module.css"

const About = () => {
  return (
    <WrapperLayout>
      <div className={page}>
        <h2>I am Export Default about page.</h2>
        <h2>Another h2</h2>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci aut vitae illo ab esse quo inventore eius cumque corporis?
        </p>
      </div>
    </WrapperLayout>
  )
}

export default About
