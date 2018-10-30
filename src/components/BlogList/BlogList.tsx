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

const getMonth = (month: number) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  return months[month - 1];
};

const FormatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  const dayAsHuman = parseInt(day, 10);
  const monthAsHuman = getMonth(parseInt(month.slice(1), 10));
  const formattedDate = dayAsHuman + ' de ' + monthAsHuman + ' de ' + year;
  return formattedDate;
};

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
              <span>{FormatDate(item.date)}</span>
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
