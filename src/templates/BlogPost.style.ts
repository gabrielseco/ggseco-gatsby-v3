import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 3rem;
  font-family: ${props => props.theme.fonts.varela};
  font-weight: 600;
  line-height: 3.875rem;
  margin: 2.1875rem 0;
`;

export const Subtitle = styled.p`
  color: #939393;
  letter-spacing: -1px;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.varela};
  line-height: 2.375rem;
  margin: 2.1875rem 0;
`;
