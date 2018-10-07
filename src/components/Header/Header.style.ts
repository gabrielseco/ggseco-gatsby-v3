import Link from 'gatsby-link';
import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border: 0;
  height: 4.6875em;
  left: 0;
  padding: 2.1875em;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const SuperLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.varela};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
`;
