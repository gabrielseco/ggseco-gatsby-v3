import * as React from 'react';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from './FormContact.style';

export default class FormContact extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <FormLabel>Nombre</FormLabel>
          <FormControl />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl />
        </FormGroup>
        <FormGroup>
          <FormLabel>Asunto</FormLabel>
          <FormControl />
        </FormGroup>
        <FormGroup>
          <FormLabel>Descripción</FormLabel>
          <FormControl cols="40" rows="10" as="textarea" />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
    );
  }
}
