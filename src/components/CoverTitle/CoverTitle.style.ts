import styled from 'styled-components';
import { rem } from './../../utils/styled';

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(2.75)};
  font-weight: 600;
  font-family: ${props => props.theme.fonts.varela};
  line-height: ${rem(3.25)};
  margin: 10% 0 ${rem(3.125)};
`;

const descriptionColors = {
  text: '#b3b3b3',
};

export const Description = styled.p<{ center: boolean }>`
  color: ${descriptionColors.text};
  font-size: ${rem(1.4375)};
  font-family: ${props => props.theme.fonts.varela};
  letter-spacing: ${rem(-0.0625)};
  line-height: ${rem(2.375)};
  margin: ${rem(2.5)} 0 ${rem(2.1875)};
  max-width: ${props => (props.center ? '100%' : rem(30))};

  a {
    border-bottom: 2px solid ${descriptionColors.text};
    color: ${descriptionColors.text};
  }
`;
