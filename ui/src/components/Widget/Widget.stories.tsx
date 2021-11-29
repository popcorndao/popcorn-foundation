import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '../Grid/FullHeightContainer';
import  { Widget } from "./";
import { Box, Typography } from '@material-ui/core';

export default {
  title: 'Windows/WidgetContainer',
  component: Widget,
  decorators: [(Story) => (<Container><Story /></Container>)]
} as Meta;

const Template: Story = (args) => <Widget {...args}><Typography>Testing 1234</Typography></Widget>;

export const Primary = Template.bind({});
Primary.args = {
  
};