import { StoryContext } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];
