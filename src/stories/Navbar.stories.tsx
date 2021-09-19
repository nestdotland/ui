import React from "react";
import { Meta, Story } from "@storybook/react";
import { Navbar, NavbarProps } from "..";
import { SiGithub, SiDiscord } from "react-icons/si";

const config = {
  pages: [
    { name: "Modules", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Docs", link: "#" },
    { name: "Login", link: "#", active: true },
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

export const Default = Template.bind({});

Default.args = {};
