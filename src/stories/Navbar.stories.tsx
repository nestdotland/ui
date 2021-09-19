import React from "react";
import { Meta, Story } from "@storybook/react";
import { Navbar, NavbarProps } from "..";
import { SiGithub, SiDiscord } from "react-icons/si";

const config = {
  pages: [
    { name: "Modules", link: "#modules" },
    { name: "Blog", link: "#blog" },
    { name: "Docs", link: "#docs" },
    { name: "Login", link: "#login", active: true },
  ],
  socials: [
    { name: "GitHub", link: "#github", icon: SiGithub },
    { name: "Discord", link: "#discord", icon: SiDiscord },
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

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = { ...config };
