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
  Tag,
} from './../components';
import { Title, Subtitle, Section } from './BlogPost.style';
import './../layouts/index.css';

const getPathImagesBlog = (url: string) => {
  return process.env.NODE_ENV === 'production' // TODO: Delete this with custom domain
    ? `https://gabrielseco.github.io${url}`
    : url;
};

const Template = (props: any) => {
  const image = getPathImagesBlog(
    props.data.markdownRemark.frontmatter.featured_image.publicURL,
  );
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
        subtitle
        featured_image {
          publicURL
        }
      }
    }
  }
`;

export default Template;
