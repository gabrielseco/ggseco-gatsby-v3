import * as React from 'react';
import { Container, Nav, SuperLink } from './Header.style';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <SuperLink to="/">Gabriel García Seco</SuperLink>
        <Nav>
          <ul>
            <li>
              <SuperLink to="/contacto">Contacto</SuperLink>
            </li>
          </ul>
        </Nav>
      </Container>
    );
  }
}

export default Header;
