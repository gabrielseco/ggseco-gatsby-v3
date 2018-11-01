import * as React from 'react';
import { BackgroundImage, Container } from './Cover.style';

interface IProps {
  children: any; 
  image: string
}

const Cover = ({ children, image }: { children: any; image: string }) => (
  <Container id="cover-container">
    <BackgroundImage url={image} />
    {children}
  </Container>
);

export default Cover;
