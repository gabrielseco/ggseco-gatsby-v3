import styled from 'styled-components';
import { rem } from './../utils/styled';

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${rem(3)};
  font-family: ${props => props.theme.fonts.varela};
  font-weight: 600;
  line-height: ${rem(3.875)};
  margin: ${rem(2.1875)} 0;
`;

export const Subtitle = styled.p`
  color: #939393;
  letter-spacing: -1px;
  font-size: ${rem(1.5)};
  font-family: ${props => props.theme.fonts.varela};
  line-height: ${rem(2.375)};
  margin: ${rem(2.1875)} 0;
`;

export const Section = styled.section`
  color: rgba(35, 37, 40, 0.7);
  font-family: ${props => props.theme.fonts.noto};
  font-size: ${rem(1.1875)};
  font-weight: 400;
  line-height: ${rem(2.1875)};
  margin: ${rem(5)} auto;
  max-width: ${rem(56.25)};

  a {
    border-bottom: 1px solid #d4d5de;
    color: #656770;
  }

  h3 {
    color: #b2b2b2;
    font-family: 'Varela Round', 'Arial', Sans-Serif;
    font-size: ${rem(1.75)};
    font-weight: 400;
    letter-spacing: -1px;
    line-height: ${rem(2.75)};
    margin: ${rem(3.125)} 0 ${rem(1.875)};
  }

  li {
    margin: 0 0 ${rem(1.25)};
    padding: 0 2.5%;
  }

  p {
    color: rgba(35, 37, 40, 0.7);
    font-family: ${props => props.theme.fonts.noto};
    font-size: ${rem(1.1875)};
    font-weight: 400;
    line-height: ${rem(2.1875)};
    margin: ${rem(2.8125)} 0;
    padding: 0;
  }
`;
