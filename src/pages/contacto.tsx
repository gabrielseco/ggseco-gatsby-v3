import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './../theme';
import { Cover, CoverTitle, Header } from './../components';
import image from './../assets/img/contact.jpg';
import './../layouts/index.css';

class Contacto extends React.PureComponent<any> {
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
          <Cover image={image}>
            <Header />
            <CoverTitle
              title="Contacto"
              description={[
                'Puedes contactar conmigo en ',
                <a href="mailto:ggarciaseco@gmail.com">
                  ggarciaseco@gmail.com
                </a>,
              ]}
              center
            />
          </Cover>
        </div>
      </ThemeProvider>
    );
  }
}

export default Contacto;
