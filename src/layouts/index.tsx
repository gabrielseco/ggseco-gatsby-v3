import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './../theme';
import {
  Cover,
  CoverTitle,
  Footer,
  Header,
  MouseScroll,
} from './../components';
import './index.css';

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
          <Cover>
            <Header />
            <CoverTitle
              title="Gabriel García Seco"
              description="Desarrollo Web | Music &amp; More"
            />
            <MouseScroll />
          </Cover>
          {this.props.children}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default DefaultLayout;
