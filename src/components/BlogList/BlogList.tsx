import * as React from 'react';
import { BlogListNode, BlogListFrontmatter } from '../../pages';
import {
  Article,
  Wrapper,
  List,
  Tag,
  DateTime,
  Title,
  Excerpt,
} from './BlogList.style';

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
          <a href="#">{item.title}</a>
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
