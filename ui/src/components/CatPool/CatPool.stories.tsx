import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '../Grid/FullHeightContainer';
import  { CatPool } from ".";

export default {
  title: 'Animations/CatPool',
  component: CatPool,
  decorators: [(Story) => (<Container><Story /></Container>)]
} as Meta;

const Template: Story = (args) => <CatPool />;

export const Primary = Template.bind({});
Primary.args = {}; 