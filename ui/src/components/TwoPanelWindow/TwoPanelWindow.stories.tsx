import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '../Grid/FullHeightContainer';
import TwoPanelWindow from "./";
import { Panel } from './Panel';
import { Typography } from '@material-ui/core';

export default {
  title: 'Windows/TwoPanelWindow',
  component: TwoPanelWindow,
  decorators: [(Story) => (<Container width={50}><Story /></Container>)]
} as Meta;

const Template: Story = (args) => <TwoPanelWindow {...args}><Panel minHeight={400}><Typography noWrap variant="h6">Left panel</Typography></Panel><Panel><Typography noWrap  variant="h6">Right Panel</Typography></Panel></TwoPanelWindow>;

export const Primary = Template.bind({});
Primary.args = {
  
};