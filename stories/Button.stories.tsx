import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "@chakra-ui/react";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    colorScheme: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: "Button",
  colorScheme: "primary",
};
