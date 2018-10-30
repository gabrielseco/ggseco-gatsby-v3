import styled from 'styled-components';
import { rem } from './../../utils/styled';

const Separator = styled.hr`
  background: #5a5a5a;
  border: 0;
  display: inline-block;
  height: ${rem(0.1875)};
  margin: 0;
  width: 10%;
`;

export default Separator;
