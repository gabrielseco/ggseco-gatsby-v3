import styled from 'styled-components';

export const Container = styled.section`
  display: table-cell;
  max-width: 56.25em;
  position: relative;
  vertical-align: middle;
  width: 43.75em;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 2.75rem;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.varela};
  line-height: 3.25em;
  margin: 10% 0 3.125em;
`;

export const Description = styled.p`
  color: #b3b3b3;
  font-size: 1.4375rem;
  font-family: ${props => props.theme.fonts.varela};
  letter-spacing: -0.0625em;
  line-height: 2.375em;
  margin: 2.5em 0 2.1875em;
`;

export const Separator = styled.hr`
  background: #5a5a5a;
  border: 0;
  height: 0.1875em;
  margin: 0;
  width: 10%;
`;
