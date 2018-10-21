import * as React from 'react';
import { BackgroundImage, Container } from './Cover.style';

const Cover = ({ children, image }: { children: any, image: string }) => (
  <Container>
    <BackgroundImage url={image} />
    {children}
  </Container>
);

export default Cover;
