import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';
import theme from './../theme';
import {
  Cover,
  CoverContainer,
  Header,
  Footer,
  Separator,
  Tag
} from './../components';
import { Title, Subtitle, Section } from './BlogPost.style';
import './../layouts/index.css';

const getPathImagesBlog = (url: string) => {
  return process.env.NODE_ENV === 'production' // TODO: Delete this with custom domain
    ? `https://ggseco.com${url}`
    : url;
};

const Template = (props: any) => {
  const image = getPathImagesBlog(
    props.data.markdownRemark.frontmatter.featured_image.publicURL
  );
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title={props.data.markdownRemark.frontmatter.title}
          meta={[
            {
              name: 'description',
              content: props.data.markdownRemark.frontmatter.excerpt
            },
            {
              name: 'keywords',
              content: 'React, Javascript, Desarrollo Web, CSS'
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image'
            },
            {
              name: 'twitter:creator',
              content: '@GGarciaSeco10'
            },
            {
              name: 'twitter:title',
              content: props.data.markdownRemark.frontmatter.title
            },
            {
              name: 'twitter:description',
              content: props.data.markdownRemark.frontmatter.excerpt
            },
            {
              name: 'twitter:image',
              content: image
            }
          ]}
        />
        <Cover image={image}>
          <Header />
          <CoverContainer center>
            <Tag>{props.data.markdownRemark.frontmatter.tags[0]}</Tag>
            <Title>{props.data.markdownRemark.frontmatter.title}</Title>
            <Subtitle>
              {props.data.markdownRemark.frontmatter.subtitle}
            </Subtitle>
            <Separator />
          </CoverContainer>
        </Cover>
        <Section
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const query = graphql`
  query BlogPostQuery($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        tags
        excerpt
        subtitle
        featured_image {
          publicURL
        }
      }
    }
  }
`;

export default Template;
