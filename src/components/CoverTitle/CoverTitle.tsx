import * as React from 'react';
import { Description, Title } from './CoverTitle.style';
import { CoverContainer, Separator } from './../../components';

const CoverTitle = ({
  title,
  description,
  separator = true,
  center = false
}: {
  title: string,
  description: any,
  separator?: boolean,
  center?: boolean
}) => (
  <CoverContainer center={center}>
    <Title itemProp="headline">{title}</Title>
    <Description center={center} itemProp="description">
      {description}
    </Description>
    {separator && <Separator />}
  </CoverContainer>
);

export default CoverTitle;
