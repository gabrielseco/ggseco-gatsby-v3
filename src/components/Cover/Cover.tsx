import * as React from 'react';
import { BackgroundImage, Container } from './Cover.style';

const Cover = ({ children }: { children: any }) => (
  <Container>
    <BackgroundImage url="http://ggseco.com/wp-content/uploads/2016/11/hoodvista.jpg" />
    {children}
  </Container>
);

export default Cover;
