import * as React from 'react';
import Link from 'gatsby-link';
import { Container, Description, Separator, Title } from './CoverTitle.style';

const CoverTitle = ({
  title,
  description,
  separator = true,
  center = false
}: {
  title: string;
  description: any;
  separator?: boolean;
  center?: boolean;
}) => (
  <Container center={center}>
    <Link to="/">
      <Title itemProp="headline">{title}</Title>
    </Link>
    <Description center={center} itemProp="description">{description}</Description>
    {separator && <Separator center={center} />}
  </Container>
);

export default CoverTitle;
