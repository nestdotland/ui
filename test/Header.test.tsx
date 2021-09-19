import React from "react";
import * as ReactDOM from "react-dom";
import { Default as Header } from "../src/stories/Header.stories";

describe("Header", () => {
  it("renders without failing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(<Header />).toMatchSnapshot();
  });
});
