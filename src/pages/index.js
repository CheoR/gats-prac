import React from "react"
import { Link } from "gatsby"
import WrapperLayout from "../components/WrapperLayout"
import Images from "../examples/Images"

export default function Home() {
  return (
    <WrapperLayout>
      <h1>Home Page</h1>
      <Images />
    </WrapperLayout>
  )
}
