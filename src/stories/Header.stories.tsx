import React from "react";
import { Meta, Story } from "@storybook/react";
import { Text, Heading } from "@chakra-ui/react";
import { Header, HeaderProps } from "../";

const meta: Meta = {
  title: "Header",
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeaderProps> = (args) => {
  return (
    <Header alignItems="center" {...args}>
      <Heading as="h1" size="xl" color="primary">
        Nest
      </Heading>
      <Text as="h2" fontSize="2xl" py="8" align="center">
        An{" "}
        <Text as="span" fontWeight="bold">
          immutable
        </Text>{" "}
        module registry for Deno.
      </Text>
    </Header>
  );
};

export const Default = Template.bind({});

Default.args = {};
