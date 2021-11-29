import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '../Grid/FullHeightContainer';
import  { Link } from "./";

export default {
  title: 'Link',
  component: Link,
  decorators: [(Story) => (<Container><Story /></Container>)]
} as Meta;

const Template: Story = (args) => <Link {...args}>test 1234</Link>;

export const Primary = Template.bind({});
Primary.args = {
  
};