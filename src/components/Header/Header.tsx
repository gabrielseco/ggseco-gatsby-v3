import * as React from "react";
import { Container, SuperLink } from "./Header.style";

class Header extends React.Component {
  render() {
    return (
      < Container>
            <SuperLink to="/">Gabriel García Seco</SuperLink>
          </ Container>
    )
  }
}

export default Header;