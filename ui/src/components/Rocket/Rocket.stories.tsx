import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '../Grid/FullHeightContainer';
import  { Rocket } from ".";

export default {
  title: 'Animations/Rocket',
  component: Rocket,
  decorators: [(Story) => (<Container><Story /></Container>)]
} as Meta;

const Template: Story = (args) => <Rocket />;

export const Primary = Template.bind({});
Primary.args = {};