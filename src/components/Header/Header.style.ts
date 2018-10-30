import Link from 'gatsby-link';
import styled from 'styled-components';
import { rem } from './../../utils/styled';

export const Container = styled.header`
  background: transparent;
  border: 0;
  display: flex;
  height: ${rem(4.6875)};
  justify-content: space-between;
  left: 0;
  padding: ${rem(2.1875)};
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const SuperLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.varela};
  font-size: ${rem(1.125)};
  font-weight: 600;
  text-decoration: none;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
