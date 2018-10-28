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

export const Section = styled.section`
  color: rgba(35, 37, 40, 0.7);
  font-family: ${props => props.theme.fonts.noto};
  font-size: 1.1875rem;
  font-weight: 400;
  line-height: 2.1875rem;
  margin: 5rem auto;
  max-width: 56.25rem;

  a {
    border-bottom: 1px solid #d4d5de;
    color: #656770;
  }

  h3 {
    color: #b2b2b2;
    font-family: 'Varela Round', 'Arial', Sans-Serif;
    font-size: 1.75rem;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 2.75rem;
    margin: 3.125rem 0 1.875rem;
  }

  li {
    margin: 0 0 1.25rem;
    padding: 0 2.5%;
  }

  p {
    color: rgba(35, 37, 40, 0.7);
    font-family: ${props => props.theme.fonts.noto};
    font-size: 1.1875rem;
    font-weight: 400;
    line-height: 2.1875rem;
    margin: 2.8125rem 0;
    padding: 0;
  }
`;
