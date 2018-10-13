import * as React from 'react';
import Link from 'gatsby-link';
import DefaultLayout from './../layouts';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <DefaultLayout>
        <h1>Hi people</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </DefaultLayout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
