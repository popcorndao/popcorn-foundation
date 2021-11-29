import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { StyledButton as Button, ButtonProps } from './index';
import Container from '../Grid/FullHeightContainer';
import { FrostedGlass } from '../Surfaces';
import Cell from '../Grid/Cell';

export default {
  title: 'MaterialUI/Button/WIP',
  component: Button,
  decorators: [(Story) => <Container><FrostedGlass width="45%" height="45%"><Cell><Story /></Cell></FrostedGlass></Container>]
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
