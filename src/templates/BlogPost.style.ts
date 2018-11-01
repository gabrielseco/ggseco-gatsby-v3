import styled from 'styled-components';
import { media } from './../utils/styled';

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 4.8rem;
  font-family: ${props => props.theme.fonts.varela};
  font-weight: 600;
  line-height: 6.2rem;
  margin: 3.5rem 0;
`;

export const Subtitle = styled.p`
  color: #939393;
  letter-spacing: -1px;
  font-size: 2.4rem;
  font-family: ${props => props.theme.fonts.varela};
  line-height: 3.8rem;
  margin: 3.5rem 0;
`;

export const Section = styled.section`
  color: rgba(35, 37, 40, 0.7);
  font-family: ${props => props.theme.fonts.noto};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.5rem;
  margin: 10% auto;
  max-width: 90rem;
  width: 90%;

  ${media.medium`
   font-size: 1.8rem;
  `} ${media.large`
    font-size: 1.9rem;
    margin: 8rem auto;
  `}

  a {
    border-bottom: 1px solid #d4d5de;
    color: #656770;
  }

  h3 {
    color: #b2b2b2;
    font-family: 'Varela Round', 'Arial', Sans-Serif;
    font-size: 2.8rem;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 4.4rem;
    margin: 5rem 0 3rem;
  }

  li {
    margin: 0 0 2rem;
    padding: 0 2.5%;
  }

  p {
    color: rgba(35, 37, 40, 0.7);
    font-family: ${props => props.theme.fonts.noto};
    font-weight: 400;
    line-height: 3.5rem;
    margin: 0 0 3.5rem;
    padding: 0;

    ${media.medium`
      margin: 4.5rem 0;
    `};
  }
`;
