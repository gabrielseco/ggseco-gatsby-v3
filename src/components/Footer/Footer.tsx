import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import { Container, List } from './Footer.style';

const Footer = () => (
  <Container>
    <List>
      <li>
        <a href="https://twitter.com/GGarciaSeco10/" target="_blank">
          <FontAwesome name="twitter"/>
        </a>
      </li> 
      <li>
        <a href="http://es.linkedin.com/in/gabrielgarciaseco" target="_blank">
          <FontAwesome name="linkedin"/>
        </a>
      </li>
      <li>
        <a href="https://github.com/gabrielseco" target="_blank">
          <FontAwesome name="github"/>
        </a>
      </li>
    </List>
  </Container>
);

export default Footer;
