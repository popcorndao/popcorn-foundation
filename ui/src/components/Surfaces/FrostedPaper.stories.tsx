import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { FrostedGlass }  from "./FrostedGlass";
import { FrostedPaper }  from "./FrostedPaper";
import Container from '../Grid/FullHeightContainer';

export default {
  title: 'Surfaces/FrostedPaper',
  component: FrostedPaper,
  decorators: [(Story) => <Container ><div style={{margin: '0 auto', minWidth: "50%", minHeight: "50%"}}><FrostedGlass height="100%" width="100%"><Story /></FrostedGlass></div></Container>]
} as Meta;

const Template: Story = (args) => <FrostedPaper {...args}></FrostedPaper>

export const PaperOnGlass = Template.bind({});
PaperOnGlass.args = {
  width: '100%',
  height: '100%',
};