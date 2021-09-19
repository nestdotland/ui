import React from "react";
import { Meta, Story } from "@storybook/react";
import { Footer, FooterProps } from "../";

const meta: Meta = {
  title: "Footer",
  component: Footer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
