import React from "react";
import * as ReactDOM from "react-dom";
import { SiDiscord, SiGithub } from "react-icons/si";
import { Default as Navbar } from "../src/stories/Navbar.stories";

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

describe("Navbar", () => {
  it("renders without failing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar {...config} />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(<Navbar {...config} />).toMatchSnapshot();
  });
});
