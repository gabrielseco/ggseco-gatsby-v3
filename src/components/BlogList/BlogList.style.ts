import styled from 'styled-components';

export const Article = styled.article`
  padding: 5.625em 0 3.625em;

  &:nth-child(odd) {
    background: #f9f9f9;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 56.25em;
  width: 90%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1.75em;
`;

export const Tag = styled.span`
  border-radius: 3px;
  background: #0085c3;
  color: ${props => props.theme.colors.white};
  display: inline-block;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.montserrat};
  padding: 0.1875rem 0.9375em;
  text-transform: uppercase;
`;

export const DateTime = styled.a`
  color: #b5b5b5;
  font-size: 0.9375rem;
  font-family: ${props => props.theme.fonts.montserrat};
  letter-spacing: -1px;
  padding: 0 0.5rem;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.varela};
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 3.875rem;
  margin: 2.8125rem 0;

  a {
    color: #373737;
  }
`;

export const Excerpt = styled.p`
  color: #62646c;
  color: rgba(35, 37, 40, 0.7);
  font-family: ${props => props.theme.fonts.noto};
  font-size: 1.1875rem;
  font-weight: 400;
  overflow: hidden;
  margin: 2.5rem 0;
  line-height: 2.1875rem;
`;
