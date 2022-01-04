/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recepies",
    description: "Simple Recepies with Gatsby",
    author: "@CheoR",
    person: {
      name: "Peggy Pug",
      age: 2,
    },
    simpledata: [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5"
    ],
    complexData: [
      {
      name: "Rocky Rott",
      age: 5,
    },{
      name: "Bully Bull",
      age: 7,
    },
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
