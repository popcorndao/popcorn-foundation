import React from 'react';
import Container from '../Grid/FullHeightContainer';

export const InContainer = (width?: string) => (Story) => (
  <Container width={width}>
    <Story />
  </Container>
);
export default InContainer;
