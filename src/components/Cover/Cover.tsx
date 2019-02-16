import * as React from 'react';
import { BackgroundImage, Container } from './Cover.style';

interface IProps {
  children: any;
  image: string;
}

const Cover = ({ children, image }: IProps) => (
  <Container id="cover-container">
    <BackgroundImage url={image} />
    {children}
  </Container>
);

export default Cover;
