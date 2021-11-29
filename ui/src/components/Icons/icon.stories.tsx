import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import * as Icon from "./";
import { Box } from "@material-ui/core";
import Centered from '../Grid/Centered';
import FullHeightContainer from '../Grid/FullHeightContainer';

export default {
  component: Icon.SiteTrackerIcon,
  title: 'Icons',
  decorators: [(Story) => <FullHeightContainer><Centered><Box color="white"><Story /></Box></Centered></FullHeightContainer>]
} as Meta;


export const AssesmentIcon: Story = (args: any) => <Icon.SiteTrackerIcon {...args} />;
export const BookmarkIcon: Story = (args: any) => <Icon.BookmarkIcon {...args} />;
export const EmailIcon: Story = (args: any) => <Icon.EmailIcon {...args} />;
export const FavoriteBorderIcon: Story = (args: any) => <Icon.FavoriteBorderIcon {...args} />;
export const FocusTimerIcon: Story = (args: any) => <Icon.FocusTimerIcon {...args} />;
export const RefreshIcon: Story = (args: any) => <Icon.RefreshIcon {...args} />;
export const SettingsIcon: Story = (args: any) => <Icon.SettingsIcon {...args} />;
export const SiteBlockerIcon: Story = (args: any) => <Icon.SiteBlockerIcon {...args} />;
export const TwitterIcon: Story = (args: any) => <Icon.TwitterIcon {...args} />;