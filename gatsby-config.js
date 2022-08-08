module.exports = {
  siteMetadata: {
    title: `Easy Team`,
    description: `A simple bootstrap 5 and Sass starter for Gatsby. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@r-ichard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: "http://localhost:8055",
        auth: {
          // You can use the credentials of an user
          email: "admin@example.com",
          password: "1234",

          // Or you can use a static token from an user
          // token: process.env.DIRECTUS_STATIC_TOKEN, 
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
