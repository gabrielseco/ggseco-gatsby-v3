import styled from 'styled-components';

export const Container = styled.section`
  background: #101010;
  display: table;
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const BackgroundImage = styled.div<{ url: string }>`
  background-image: url('${props => props.url}');
  background-size:cover;
  height: 100%;
  position: absolute;
  opacity: 0.2;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  width: 100%;
`;
