import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from './../theme';
import { Cover, CoverTitle, Header } from './../components';
import image from './../assets/img/cover.jpg';
import './../layouts/index.css';

const NotFoundPage = ({ children }: { children: any }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="No se encontró la página | Gabriel García Seco"
        meta={[
          { name: 'description', content: 'Desarrollo Web | Music & More' },
          {
            name: 'keywords',
            content: 'React, Javascript, Desarrollo Web, CSS',
          },
        ]}
      >
        <html lang="es" />
      </Helmet>
      <Cover image={image}>
        <Header />
        <CoverTitle
          title="Error 404"
          description="La página que estás buscando puede que ya no exista"
          separator={false}
        />
      </Cover>
      {children}
    </div>
  </ThemeProvider>
);

export default NotFoundPage;
