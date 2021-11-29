import React from 'react';
import Component from '.';
import { CenteredStory } from '../Decorator/CenteredStory';


export default {
  component: Component,
  title: 'CircularProgress',
  decorators: [CenteredStory]
};

const Template = (args: any) => <Component {...args} />;

export const Default = Template.bind({});