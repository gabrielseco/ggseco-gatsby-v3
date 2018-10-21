module.exports = {
  siteMetadata: {
    title: `Gabriel García Seco - Desarrollo Web | Music &amp; More`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      }
    }
  ],
  pathPrefix: `/ggseco-gatsby-v3`,
}
