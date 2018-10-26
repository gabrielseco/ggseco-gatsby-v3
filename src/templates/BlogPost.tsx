import * as React from 'react'
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby'
import theme from './../theme';
import { Cover, Header } from './../components';

const Template = (props: any) => {
  const image = props.data.markdownRemark.frontmatter.featured_image ? 'props.data.markdownRemark.frontmatter.featured_image.publicURL' : '';
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Gabriel García Seco - Desarrollo Web | Music &amp; More"
        meta={[
          { name: 'description', content: 'Desarrollo Web | Music & More' },
          {
            name: 'keywords',
            content: 'React, Javascript, Desarrollo Web, CSS',
          },
        ]}
      />
      <Cover image={image}>
        <Header />
        <p>{props.data.markdownRemark.frontmatter.tags[0]}</p>
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <h3>{props.data.markdownRemark.frontmatter.subtitle}</h3>
      </Cover>
    </div>
  </ThemeProvider>
  )
}

export const query = graphql`
  query BlogPostQuery($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html,
      frontmatter {
        title,
        tags,
        subtitle,
        featured_image {
          publicURL
        }
      }
    }
  }
`

export default Template