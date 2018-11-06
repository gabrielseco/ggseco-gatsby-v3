import * as React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-v3'
import theme from './../theme';
import {
  Cover,
  CoverTitle,
  Header,
  FormContact,
  MouseScroll,
} from './../components';
import image from './../assets/img/contact.jpg';
import './../layouts/index.css';

const siteKey = "6Ld0HHkUAAAAAFebn-wutXyBf31y_XUbEBE0MZvb";

class Contacto extends React.PureComponent<any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    loadReCaptcha(siteKey);
  }

  verifyCallback = (recaptchaToken: string) => {
    console.log(recaptchaToken, "<= your recaptcha token")
    // TODO: Here I'll make a request to my backend sending the token
  }

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
              description="En este formulario puedes contactar conmigo"
              center
            />
            <MouseScroll />
          </Cover>
          <FormContact />
          <ReCaptcha
            sitekey={siteKey}
            action='contact'
            verifyCallback={this.verifyCallback}
        />
        </div>
      </ThemeProvider>
    );
  }
}

export default Contacto;
