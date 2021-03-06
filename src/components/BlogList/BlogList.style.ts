import styled from 'styled-components';
import { media } from './../../utils/styled';

export const Article = styled.article`
  padding: 9rem 0 5.8rem;

  &:nth-child(odd) {
    background: #f9f9f9;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  width: 90%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2.8rem;
`;

export const DateTime = styled.a`
  color: #b5b5b5;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.montserrat};
  letter-spacing: -1px;
  padding: 0 0.8rem;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.varela};
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 4.6rem;
  margin: 3rem 0;

  ${media.medium`
    font-size: 4.8rem;
    line-height: 6.2rem;
    margin: 4.5rem 0;
  `} a {
    color: #373737;

    &:hover {
      color: #5e5e5e;
    }
  }
`;

export const Excerpt = styled.p`
  color: #62646c;
  color: rgba(35, 37, 40, 0.7);
  font-family: ${props => props.theme.fonts.noto};
  font-size: 1.7rem;
  font-weight: 400;
  overflow: hidden;
  line-height: 2.8rem;
  margin: 3rem 0;

  ${media.medium`
    font-size: 1.9rem;
    line-height: 4.5rem;
    margin: 4rem 0;
  `};
`;
