import React from "react";
import { Meta, Story } from "@storybook/react";
import { Navbar, NavbarProps } from "../src";
import { SiGithub, SiDiscord } from "react-icons/si";

const config = {
  pages: [
    { name: "Modules", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Docs", link: "#" },
  ],
  socials: [
    { name: "GitHub", link: "#", icon: SiGithub },
    { name: "Discord", link: "#", icon: SiDiscord },
  ],
};

const meta: Meta = {
  title: "Navbar",
  component: Navbar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...config} {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
