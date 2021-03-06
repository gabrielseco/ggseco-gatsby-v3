import Link from 'gatsby-link';
import styled from 'styled-components';
import { media } from './../../utils/styled';

export const Container = styled.header`
  background: transparent;
  border: 0;
  display: flex;
  height: 7.5rem;
  justify-content: space-between;
  left: 0;
  padding: 2.5rem 1rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  ${media.medium`
    padding: 3.5rem;
  `};
`;

export const SuperLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.varela};
  font-size: 1.8rem;
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
