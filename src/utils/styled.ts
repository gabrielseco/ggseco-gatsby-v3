import { css } from 'styled-components';

const sizes: { [key: string]: number } = {
  giant: 1200,
  large: 900,
  medium: 600,
  small: 320
};

interface IMedia {
  small: (query: TemplateStringsArray) => TemplateStringsArray;
  medium: (query: TemplateStringsArray) => TemplateStringsArray;
  large: (query: TemplateStringsArray) => TemplateStringsArray;
  giant: (query: TemplateStringsArray) => TemplateStringsArray;
}

export const media: IMedia = Object.keys(sizes).reduce(
  (accumulator: any, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args: any) => css`
      @media (min-width: ${emSize}em) {
        ${css(args as any)};
      }
    `;
    return accumulator;
  },
  {} as IMedia
);
