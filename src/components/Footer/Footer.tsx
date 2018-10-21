import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';
import { Container, List, IconLink } from './Footer.style';

const Footer = () => (
  <Container>
    <List>
      <li>
        <IconLink hoverColor="#55acee" href="https://twitter.com/GGarciaSeco10/" target="_blank">
          <FontAwesome name="twitter"/>
        </IconLink>
      </li> 
      <li>
        <IconLink hoverColor="#0e76a8" href="http://es.linkedin.com/in/gabrielgarciaseco" target="_blank">
          <FontAwesome name="linkedin"/>
        </IconLink>
      </li>
      <li>
        <IconLink hoverColor="#999" href="https://github.com/gabrielseco" target="_blank">
          <FontAwesome name="github"/>
        </IconLink>
      </li>
    </List>
  </Container>
);

export default Footer;
