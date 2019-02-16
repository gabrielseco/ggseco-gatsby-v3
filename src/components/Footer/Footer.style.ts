import styled from 'styled-components';

export const Container = styled.footer`
  background: #242526;
  display: flex;
  height: 10rem;
  padding: 3rem;
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  width: 100%;

  li {
    border-left: 1px solid #4b4b4b;
    display: inline-block;
  }

  li:first-child {
    border: 0;
  }
`;

export const IconLink = styled.a<{ hoverColor: string }>`
  color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
  padding: 0 1.7rem;
  text-decoration: none;

  &:hover {
    color: ${props => props.hoverColor};
  }
`;
