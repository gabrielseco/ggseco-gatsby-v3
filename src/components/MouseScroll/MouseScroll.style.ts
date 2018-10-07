import styled from 'styled-components';

export const Mouse = styled.div`
  border: 2px solid #888;
  border: 2px solid rgba(255, 255, 255, 0.27);
  border-radius: 0.9375em;
  bottom: 2.5em;
  cursor: pointer;
  position: absolute;
  right: 2.5em;
  margin-left: -0.75em;
  height: 2.25em;
  transition: border-color 0.2s ease-in;
  width: 1.5625em;
`;

export const Scroll = styled.div`
  animation-duration: 2s;
  animation-name: scroll;
  animation-iteration-count: infinite;
  border-radius: 0.25em;
  display: block;
  margin: 0.375em auto;
  width: 0.1875em;
  height: 0.375em;
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
