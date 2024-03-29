import React from "react";
import { Meta, Story } from "@storybook/react";
import { Status, StatusProps } from "..";

const meta: Meta = {
  title: "Status",
  component: Status,
  argTypes: {
    status: {
      control: { type: "radio" },
      options: ["normal", "degraded", "partial", "down"],
    },
  },
  args: {
    status: "normal",
  },
};

export default meta;

const Template: Story<StatusProps> = (args) => <Status {...args} />;

export const Default = Template.bind({});

Default.args = {};
