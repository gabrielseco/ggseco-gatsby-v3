import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 2.75rem;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.varela};
  line-height: 3.25rem;
  margin: 10% 0 3.125rem;
`;

const descriptionColors = {
  text: '#b3b3b3',
};

export const Description = styled.p<{ center: boolean }>`
  color: ${descriptionColors.text};
  font-size: 1.4375rem;
  font-family: ${props => props.theme.fonts.varela};
  letter-spacing: -0.0625rem;
  line-height: 2.375rem;
  margin: 2.5rem 0 2.1875rem;
  max-width: ${props => (props.center ? '100%' : '30rem')};

  a {
    border-bottom: 2px solid ${descriptionColors.text};
    color: ${descriptionColors.text};
  }
`;
