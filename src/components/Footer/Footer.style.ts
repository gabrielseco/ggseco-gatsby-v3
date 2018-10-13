import styled from 'styled-components';

export const Container = styled.footer`
  background: #242526;
  display: flex;
  padding: 1.875em;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 100%;

  li {
    display: inline-block;
    padding: 0 2em;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }
`;
