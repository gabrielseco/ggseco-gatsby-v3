import Link from 'gatsby-link';
import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border: 0;
  height: 4.68em;
  padding: 2.18em;
`;

export const SuperLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.varela};
  font-size: 1.125em;
  font-weight: 600;
  text-decoration: none;
`;
