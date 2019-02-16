import styled from 'styled-components';
import { media } from './../../utils/styled';

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 4rem;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.varela};
  line-height: 5rem;
  margin: 10% 0 5rem;

  ${media.medium`
    font-size: 4.4rem;
  `};
`;

const descriptionColors = {
  text: '#b3b3b3'
};

export const Description =
  styled.p <
  { center: boolean } >
  `
  color: ${descriptionColors.text};
  font-size: 2.3rem;
  font-family: ${props => props.theme.fonts.varela};
  letter-spacing: -0.1rem;
  line-height: 3.8rem;
  margin: 4rem 0 3.5rem;
  max-width: ${props => (props.center ? '100%' : '56rem')};

  a {
    border-bottom: 2px solid ${descriptionColors.text};
    color: ${descriptionColors.text};
  }
`;
