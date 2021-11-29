import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Component, { NotificationSlimProps } from ".";
import { Link } from "@material-ui/core";
import InContainer from "../Decorator/InContainer";

export default {
  component: Component,
  title: 'NotificationSlim',
  argsTypes: {
    imgSrc: { control: 'text' }
  },
  args: {
      visible: true,
      children: <>Did you know that Popcorn helps social impact organizations? <Link color="secondary" href="#">Learn more!</Link></>,
  }
} as Meta;


const Template: Story<NotificationSlimProps> = (args: any) => <Component {...args} />;


export const Middle = Template.bind({});
export const Top = Template.bind({});
Middle.decorators = [(Story) => InContainer('40%')(Story)]