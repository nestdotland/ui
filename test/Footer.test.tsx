import React from "react";
import * as ReactDOM from "react-dom";
import { Default as Footer } from "../src/stories/Footer.stories";

describe("Footer", () => {
  it("renders without failing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(<Footer />).toMatchSnapshot();
  });
});
