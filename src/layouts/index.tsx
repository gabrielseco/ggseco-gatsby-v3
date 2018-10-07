import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import theme from './../theme';
import './index.css';

const Header = styled.div`
  background: #000;
  border: 0;
  height: 4.68em;
  padding: 2.18em;
`;

const SuperLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.varela};
  font-size: 1.125em;
  font-weight: 600;
  text-decoration: none;
`;

interface DefaultLayoutProps {
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title="Gabriel García Seco - Desarrollo Web | Music &amp; More"
            meta={[
              { name: 'description', content: 'Desarrollo Web | Music & More' },
              {
                name: 'keywords',
                content: 'React, Javascript, Desarrollo Web, CSS',
              },
            ]}
          />
          <Header>
            <SuperLink to="/">Gabriel García Seco</SuperLink>
          </Header>
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

export default DefaultLayout;
