import styled from 'styled-components';

const Tag = styled.span`
  border-radius: 3px;
  background: #0085c3;
  color: ${props => props.theme.colors.white};
  display: inline-block;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.montserrat};
  padding: 0.1875rem 0.9375em;
  text-transform: uppercase;
`;

export default Tag;
