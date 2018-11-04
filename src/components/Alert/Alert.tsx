import styled from 'styled-components';

export enum AlertEnum {
  SUCCESS = 0,
  ERROR = 1,
}

const colors = (props: any): any => ({
  [AlertEnum.SUCCESS]: {
    background: 'rgb(43, 175, 43)',
    color: props.theme.colors.white,
  },
  [AlertEnum.ERROR]: {
    background: 'rgb(239, 87, 52)',
    color: props.theme.colors.white,
  },
});


const Alert = styled.p<{ type: number }>`
  background: ${props => colors(props)[props.type].background};
  color: ${props => colors(props)[props.type].color};
  font-size: 1.8rem;
  padding: 2rem;
  text-align: center;
`;

export default Alert;
