import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import _Step1 from "./Step1";
import _Step2 from "./Step2";
import _Step3 from "./Step3";

export default {
  component: _Step1,
  title: 'Pages/Login',
} as Meta;


export const Step1: Story = (args: any) => <_Step1 {...args} />;
export const Step2: Story = (args: any) => <_Step2 {...args} />;
export const Step3: Story = (args: any) => <_Step3 {...args} />;

