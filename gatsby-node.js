const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/BlogPost.tsx')

    resolve(
      graphql(
        `
          query myQuery {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          const slug = node.frontmatter.path;
          const path = "blog" + slug;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: slug
            }
          })

          resolve()
        })
      })
    )
  })
})