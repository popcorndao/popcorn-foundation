import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { FrostedGlass } from "./FrostedGlass";
import Container from '../Grid/FullHeightContainer';

export default {
  title: 'Surfaces/FrostedGlass',
  component: FrostedGlass,
  decorators: [(Story) => <Container ><div style={{margin: '0 auto', minWidth: "50%", minHeight: "50%"}}><Story /></div></Container>]
} as Meta;

const Template: Story = (args) => <FrostedGlass {...args}></FrostedGlass>

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: '100%',
};

