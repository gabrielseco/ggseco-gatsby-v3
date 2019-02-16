import styled from 'styled-components';

const CoverContainer =
  styled.section <
  { center: boolean } >
  `
  display: table-cell;
  max-width: 90rem;
  position: relative;
  vertical-align: middle;
  text-align: ${props => (props.center ? 'center' : 'inherit')};
  width: ${props => (props.center ? 'inherit' : '80%')};
`;

export default CoverContainer;
