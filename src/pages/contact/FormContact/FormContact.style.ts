import styled from 'styled-components';

export const Form = styled.form`
  margin: 8rem auto;
  max-width: 90rem;
  width: 90%;
`;

export const FormGroup = styled.div`
  + div {
    margin-top: 4rem;
  }
`;

export const FormLabel = styled.label`
  color: rgba(35, 37, 40, 0.7);
  display: block;
  font-weight: 400;
  font-size: 1.9rem;
  font-family: ${props => props.theme.fonts.noto};
  line-height: 3.5rem;
  margin-bottom: 1rem;
`;

export const FormControl = styled.input<{ cols?: string; rows?: string }>`
  border: 0.2rem solid #f5f5f5;
  border-radius: 0.3rem;
  background: #f5f5f5;
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 1.4rem;
  padding: 1.4rem 1.8rem;
  transition: border-color 0.2s ease-in;
  width: 100%;

  &:focus {
    border-color: #cdcdcd;
    outline: none;
  }
`;

export const Button = styled.button``;
