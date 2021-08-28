import React from "react";
import { Meta, Story } from "@storybook/react";
import { Status, StatusProps } from "../src";

const meta: Meta = {
  title: "Status",
  component: Status,

  args: {
    status: "normal",
  },
};

export default meta;

const Template: Story<StatusProps> = (args) => (
  <Status status="normal" {...args} />
);

export const Default = Template.bind({});

Default.args = {};
