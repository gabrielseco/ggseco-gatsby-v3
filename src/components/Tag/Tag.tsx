import styled from 'styled-components';
import { rem } from './../../utils/styled'

const Tag = styled.span`
  border-radius: 3px;
  background: #0085c3;
  color: ${props => props.theme.colors.white};
  display: inline-block;
  font-size: ${rem(0.75)};
  font-family: ${props => props.theme.fonts.montserrat};
  padding: ${rem(0.1875)} ${rem(0.9375)};
  text-transform: uppercase;
`;

export default Tag;
