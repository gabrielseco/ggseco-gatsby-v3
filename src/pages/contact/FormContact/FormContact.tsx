import * as React from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  ButtonContainer,
  Error,
} from './FormContact.style';
import { scrollTo } from './../../../utils/animations'; 

const getContactsPath = () => {
  const URL = 'https://ggseco-backend.herokuapp.com/api'; 
  const ENDPOINT = '/contacts';

  return URL + ENDPOINT;
}

interface IState {
  form: {
    name: string;
    email: string;
    subject: string;
    body: string
  },
  error: boolean
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
      },
      error: false
      
    };
  }
  onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    axios.post(getContactsPath(), this.state.form).then(() => {
      console.log('AXIOS DONE OKAY')
    }).catch(() => {
      this.setState({
        error: true
      })
      const el = document.querySelector('#form-contact');
      scrollTo(el.clientHeight - 75, 1000);
    });
  }

  onChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        [evt.currentTarget.name]: evt.currentTarget.value
      }
    }))
  }

  render() {
    return (
      <Form id="form-contact" onSubmit={this.onSubmit}>
        {this.state.error && <Error>Rellena todos los campos necesarios</Error>}
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
          <FormControl name="body" onChange={this.onChange} cols="40" rows="10" as="textarea" />
        </FormGroup>
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </Form>
    );
  } 
}
