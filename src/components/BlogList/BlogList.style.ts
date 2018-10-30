import styled from 'styled-components';
import { rem } from './../../utils/styled';

export const Article = styled.article`
  padding: ${rem(5.625)} 0 ${rem(3.625)};

  &:nth-child(odd) {
    background: #f9f9f9;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${rem(56.25)};
  width: 90%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: ${rem(1.75)};
`;

export const DateTime = styled.a`
  color: #b5b5b5;
  font-size: ${rem(0.9375)};
  font-family: ${props => props.theme.fonts.montserrat};
  letter-spacing: -1px;
  padding: 0 ${rem(0.5)};
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.varela};
  font-size: ${rem(3)};
  font-weight: 600;
  letter-spacing: -1px;
  line-height: ${rem(3.875)};
  margin: ${rem(2.8125)} 0;

  a {
    color: #373737;
  }
`;

export const Excerpt = styled.p`
  color: #62646c;
  color: rgba(35, 37, 40, 0.7);
  font-family: ${props => props.theme.fonts.noto};
  font-size: ${rem(1.1875)};
  font-weight: 400;
  overflow: hidden;
  margin: ${rem(2.5)} 0;
  line-height: ${rem(2.8125)};
`;
