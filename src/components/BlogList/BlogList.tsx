import * as React from 'react';
import { Link } from 'gatsby';
import { BlogListNode, BlogListFrontmatter } from '../../pages';
import {
  Article,
  Wrapper,
  List,
  DateTime,
  Title,
  Excerpt,
} from './BlogList.style';
import { Tag } from './../../components';

const BlogListItem = ({ item }: { item: BlogListFrontmatter }) => {
  return (
    <Article>
      <Wrapper>
        <List>
          <li>
            <Tag>{item.tags[0]}</Tag>
          </li>
          <li>
            <DateTime href="#">
              <span>{item.date}</span>
            </DateTime>
          </li>
        </List>
        <Title>
          <Link to={`blog/${item.path}`}>{item.title}</Link>
        </Title>
        <Excerpt>{item.excerpt} [...]</Excerpt>
      </Wrapper>
    </Article>
  );
};

const BlogList = ({ items }: { items: BlogListNode[] }): any => {
  return items.map((item, key) => {
    return <BlogListItem key={key} item={item.node.frontmatter} />;
  });
};

export default BlogList;
