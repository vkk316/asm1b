module.exports = {
  siteMetadata: {
    title: `Easy Team`,
  },
  pathPrefix: "/asm1b",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: "http://localhost:8055",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
