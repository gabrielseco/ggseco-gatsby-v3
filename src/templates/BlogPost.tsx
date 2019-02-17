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
              content: props.data.markdownRemark.frontmatter.description
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
              name: 'twitter:image',
              content: `${props.data.site.siteMetadata.siteUrl}/blog${
                props.data.markdownRemark.frontmatter.path
              }twitter-card.jpg`
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
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        tags
        subtitle
        featured_image {
          publicURL
        }
        path
      }
    }
  }
`;

export default Template;
