import styled from 'styled-components';
import { rem } from './../../utils/styled';

export const Mouse = styled.div`
  border: 2px solid #888;
  border: 2px solid rgba(255, 255, 255, 0.27);
  border-radius: ${rem(0.9375)};
  bottom: ${rem(2.5)};
  cursor: pointer;
  position: absolute;
  right: ${rem(2.5)};
  margin-left: ${rem(-0.75)};
  height: ${rem(2.25)};
  transition: border-color 0.2s ease-in;
  width: ${rem(1.5625)};
`;

export const Scroll = styled.div`
  animation-duration: 2s;
  animation-name: scroll;
  animation-iteration-count: infinite;
  border-radius: 0.25em;
  display: block;
  margin: ${rem(0.375)} auto;
  width: ${rem(0.1875)};
  height: ${rem(0.375)};
  background: #b0b1b1;

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;
