import * as React from 'react';
import axios from 'axios';
import { Alert, AlertEnum, loadReCaptcha, ReCaptcha } from './../../components';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  ButtonContainer,
} from './FormContact.style';
import { scrollTo } from './../../utils/animations';
import { getBackendUrl } from './../../utils/rest';

const siteKey = '6Ld0HHkUAAAAAFebn-wutXyBf31y_XUbEBE0MZvb';

const getContactsPath = () => {
  const URL = getBackendUrl();
  const ENDPOINT = '/contacts';

  return URL + ENDPOINT;
};

const getMessage = (message: string): string => {
  const FIELDS_EMPTY = 'Some fields are empty';
  const EMAIL_IS_INVALID = 'The email is invalid';
  const RECAPTCHA_INVALID = 'The score is not enough';

  switch (message) {
    case FIELDS_EMPTY:
      return 'Rellena todos los campos necesarios';
    case EMAIL_IS_INVALID:
      return 'El email no es válido';
    case RECAPTCHA_INVALID:
      return 'Según el recaptcha eres un bot. Si quieres puedes contactar en ggarciaseco@gmail.com';
    default:
      throw new Error('The error message is not implemented');
  }
};

interface IState {
  form: {
    name: string;
    email: string;
    subject: string;
    body: string;
    score: number;
  };
  error: boolean;
  success: boolean;
  messageAlert: string;
}

export default class FormContact extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      form: {
        name: '',
        email: '',
        subject: '',
        body: '',
        score: 0,
      },
      messageAlert: '',
      error: false,
      success: false,
    };
  }

  componentDidMount() {
    loadReCaptcha(siteKey);
  }

  verifyCallback = (recaptchaToken: string) => {
    const endpoint = getBackendUrl() + '/contacts/validateRecaptcha';
    axios
      .post(endpoint, { token: recaptchaToken })
      .then(response => {
        this.setState(state => {
          return {
            ...state,
            form: {
              ...state.form,
              score: response.data.score,
            },
          };
        });
      })
      .catch(error => console.log('error', error));
  };

  onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    axios
      .post(getContactsPath(), this.state.form)
      .then(() => {
        this.setState({
          success: true,
        });
        const el = document.querySelector('#form-contact');
        scrollTo(el.clientHeight - 75, 1000);
      })
      .catch(error => {
        const message = error.response.data.message;
        const assignedMessage = getMessage(message);
        this.setState({
          error: true,
          messageAlert: assignedMessage,
        });
        const el = document.querySelector('#form-contact');
        scrollTo(el.clientHeight - 75, 1000);
      });
  };

  onChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const dynamicStateEvent = {
      [evt.currentTarget.name]: evt.currentTarget.value,
    };
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        ...dynamicStateEvent,
      },
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Form id="form-contact" onSubmit={this.onSubmit}>
        {this.state.error && (
          <Alert type={AlertEnum.ERROR}>{this.state.messageAlert}</Alert>
        )}
        {this.state.success && (
          <Alert type={AlertEnum.SUCCESS}>Mensaje recibido</Alert>
        )}
        <FormGroup>
          <FormLabel>Nombre (Requerido)</FormLabel>
          <FormControl name="name" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email (Requerido)</FormLabel>
          <FormControl name="email" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Asunto (Requerido)</FormLabel>
          <FormControl name="subject" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Descripción (Requerido)</FormLabel>
          <FormControl
            name="body"
            onChange={this.onChange}
            cols="40"
            rows="10"
            as="textarea"
          />
        </FormGroup>
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </Form>
      <ReCaptcha
          sitekey={siteKey}
          action="contact"
          verifyCallback={this.verifyCallback}
        />

      </React.Fragment>
      
    );
  }
}
