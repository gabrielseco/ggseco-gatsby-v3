import styled from 'styled-components';

export const Mouse = styled.div`
  border: 2px solid #888;
  border: 2px solid rgba(255, 255, 255, 0.27);
  border-radius: 1.5rem;
  bottom: 4rem;
  cursor: pointer;
  position: absolute;
  right: 4rem;
  margin-left: -1.2rem;
  height: 3.6rem;
  transition: border-color 0.2s ease-in;
  width: 2.5rem;
`;

export const Scroll = styled.div`
  animation-duration: 2s;
  animation-name: scroll;
  animation-iteration-count: infinite;
  border-radius: 0.4rem;
  display: block;
  margin: 0.6rem auto;
  width: 0.3rem;
  height: 0.6rem;
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
