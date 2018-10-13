import * as React from 'react';
import Link from 'gatsby-link';
import { Container, Description, Separator, Title } from './CoverTitle.style';

const CoverTitle = ({ title, description, separator = true}: { title: string, description: string, separator?: boolean}) => (
  <Container>
    <Link to="/">
      <Title itemProp="headline">{title}</Title>
    </Link>
    <Description itemProp="description">
      {description}
    </Description>
    {separator && <Separator />}
  </Container>
);

export default CoverTitle;
