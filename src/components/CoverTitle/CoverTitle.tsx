import * as React from 'react';
import Link from 'gatsby-link';
import { Container, Description, Separator, Title } from './CoverTitle.style'

const CoverTitle = () => (
  <Container>
    <Link to="/">
      <Title itemProp="headline">
        Gabriel García Seco
      </Title>
    </Link>
    <Description itemProp="description">Desarrollo Web | Music &amp; More</Description>
    <Separator />
  </Container>
);

export default CoverTitle;
