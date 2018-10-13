import * as React from 'react';
import { BackgroundImage, Container } from './Cover.style';
import logo from './../../assets/img/cover.jpg';

const Cover = ({ children }: { children: any }) => (
  <Container>
    <BackgroundImage url={logo} />
    {children}
  </Container>
);

export default Cover;
