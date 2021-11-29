import { Meta, Story } from "@storybook/react/types-6-0";
import Component, { BackgroundImageContainerProps } from ".";

export default {
  component: Component,
  title: 'BackgroundImage',
  argsTypes: {
    imgSrc: { control: 'text' }
  }
} as Meta;


const Template: Story<BackgroundImageContainerProps> = (args: any) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgSrc: 'https://dgqcbki4b05ac.cloudfront.net/photo-1457365050282-c53d772ef8b21473036141.jpg',
};