import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Component from "./Variations/VariationA";
import VarB from "./Variations/VariationB";
import TopAligned from "./Variations/TopAligned";
import VarC from "./Variations/VariationC";
import VarD from "./Variations/VariationD";
import VarE from "./Variations/VariationE";

export default {
  component: Component,
  title: 'Grid',
} as Meta;


export const VariationA: Story = (args: any) => <Component {...args} />;
export const VariationATopAligned: Story = (args: any) => <TopAligned {...args} />;
export const VariationB: Story = (args: any) => <VarB {...args} />;
export const VariationC: Story = (args: any) => <VarC {...args} />;
export const VariationD: Story = (args: any) => <VarD {...args} />;
export const VariationE: Story = (args: any) => <VarE {...args} />;