import styled from 'styled-components';

const Tag = styled.span`
  border-radius: 0.3rem;
  background: #0085c3;
  color: ${props => props.theme.colors.white};
  display: inline-block;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.montserrat};
  padding: 0.3rem 1.5rem;
  text-transform: uppercase;
`;

export default Tag;
