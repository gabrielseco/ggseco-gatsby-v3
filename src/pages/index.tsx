import * as React from 'react';
import { graphql } from 'gatsby';
import DefaultLayout from './../layouts';
import { BlogList } from './../components';

export interface BlogListFrontmatter {
  title: string;
  path: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export interface BlogListNode {
  node: {
    frontmatter: BlogListFrontmatter;
  };
}

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: BlogListNode[];
    };
  };
}

export default class extends React.Component<IndexPageProps> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout>
        <BlogList items={this.props.data.allMarkdownRemark.edges} />
      </DefaultLayout>
    );
  }
}

export const HomePageQuery = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
            excerpt
          }
        }
      }
    }
  }
`;
