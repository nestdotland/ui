import React from "react";
import * as ReactDOM from "react-dom";
import { Default as Todo } from "../stories/Todo.stories";

describe("TODO(@maximousblk)", () => {
  it("create components", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
