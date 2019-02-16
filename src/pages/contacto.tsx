import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './../theme';
import {
  Cover,
  CoverTitle,
  Header,
  FormContact,
  MouseScroll,
  Footer
} from './../components';
import image from './../assets/img/contact.jpg';
import './../layouts/index.css';

class Contacto extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title="Gabriel García Seco - Desarrollo Web | Music &amp; More"
            meta={[
              { name: 'description', content: 'Desarrollo Web | Music & More' },
              {
                name: 'keywords',
                content: 'React, Javascript, Desarrollo Web, CSS'
              }
            ]}
          >
            <html lang="es" />
          </Helmet>
          <Cover image={image}>
            <Header />
            <CoverTitle
              title="Contacto"
              description="En este formulario puedes contactar conmigo"
              center
            />
            <MouseScroll />
          </Cover>
          <FormContact />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Contacto;
