import styled from 'styled-components';

export enum AlertEnum {
  SUCCESS = 0,
  ERROR = 1
}

const colors: any = {
  [AlertEnum.ERROR]: {
    background: 'rgb(239, 87, 52)',
    color: 'white'
  }
}

const Alert = styled.p<{type: number}>`
  background: ${props => colors[props.type].background};
  color: ${props => colors[props.type].color};
  font-size: 1.8rem;
  padding: 2rem;
  text-align: center;
`;

export default Alert;