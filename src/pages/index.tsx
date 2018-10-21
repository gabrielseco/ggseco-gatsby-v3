import * as React from 'react';
import DefaultLayout from './../layouts';

const BlogList = ({ items }: { items: any}) => {
  return (
    <div>{JSON.stringify(items, null, 4)}</div>
  )
}

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: any[]
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
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    } 
  }
`;
