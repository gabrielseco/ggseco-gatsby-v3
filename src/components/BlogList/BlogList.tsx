import * as React from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';
import { BlogListNode, BlogListFrontmatter } from '../../pages'; // eslint-disable-line
import {
  Article,
  Wrapper,
  List,
  DateTime,
  Title,
  Excerpt
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
    'Diciembre'
  ];

  return months[month - 1];
};

const FormatDate = (date: string, fn: Function) => {
  const [year, month, day] = date.split('-');
  const dayAsHuman = parseInt(day, 10);
  const monthAsHuman = getMonth(parseInt(month.slice(1), 10));
  return fn({
    day: dayAsHuman,
    month: monthAsHuman,
    year: parseInt(year, 10)
  });
};

const FormatDesktop = ({
  day,
  month,
  year
}: {
  day: number;
  month: number;
  year: number;
}) => {
  return day + ' de ' + month + ' de ' + year;
};

const FormatMobile = ({
  day,
  month,
  year
}: {
  day: number;
  month: number;
  year: number;
}) => {
  return day + ' ' + month + ' ' + year;
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
              <Media query="(max-width: 768px)">
                {(matches: boolean) =>
                  matches ? (
                    <span>{FormatDate(item.date, FormatMobile)}</span>
                  ) : (
                    <span>{FormatDate(item.date, FormatDesktop)}</span>
                  )
                }
              </Media>
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
