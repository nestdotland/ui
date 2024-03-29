import React from "react";
import * as ReactDOM from "react-dom";
import { Default as Status } from "../src/stories/Status.stories";

describe("Status", () => {
  it("renders without failing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Status status="normal" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(<Status status="normal" />).toMatchSnapshot();
  });
});
