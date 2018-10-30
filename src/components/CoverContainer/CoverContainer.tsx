import styled from 'styled-components';
import { rem } from './../../utils/styled';

const CoverContainer = styled.section<{ center: boolean }>`
  display: table-cell;
  max-width: ${rem(56.25)};
  position: relative;
  vertical-align: middle;
  text-align: ${props => (props.center ? 'center' : 'inherit')};
  width: ${props => (props.center ? 'inherit' : '80%')};
`;

export default CoverContainer;
