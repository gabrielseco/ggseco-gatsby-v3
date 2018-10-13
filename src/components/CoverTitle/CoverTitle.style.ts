import styled from 'styled-components';

export const Container = styled.section`
  display: table-cell;
  max-width: 56.25em;
  position: relative;
  vertical-align: middle;
  width: 80%;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 2.75rem;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.varela};
  line-height: 3.25rem;
  margin: 10% 0 3.125rem;
`;

export const Description = styled.p`
  color: #b3b3b3;
  font-size: 1.4375rem;
  font-family: ${props => props.theme.fonts.varela};
  letter-spacing: -0.0625em;
  line-height: 2.375rem;
  margin: 2.5rem 0 2.1875rem;
  max-width: 30em;
`;

export const Separator = styled.hr`
  background: #5a5a5a;
  border: 0;
  height: 0.1875em;
  margin: 0;
  width: 10%;
`;
