import { StoryContext } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src";
import NestTheme from "./theme";

import "@fontsource/inter";
import "@fontsource/jetbrains-mono";

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  docs: {
    theme: NestTheme,
  },
  backgrounds: {
    values: [
      {
        name: "gray/900",
        value: theme.colors.gray[900],
      },
      {
        name: "gray/800",
        value: theme.colors.gray[800],
      },
      {
        name: "gray/700",
        value: theme.colors.gray[700],
      },
      {
        name: "gray/600",
        value: theme.colors.gray[600],
      },
      {
        name: "gray/500",
        value: theme.colors.gray[500],
      },
      {
        name: "gray/400",
        value: theme.colors.gray[400],
      },
      {
        name: "gray/300",
        value: theme.colors.gray[300],
      },
      {
        name: "gray/200",
        value: theme.colors.gray[200],
      },
      {
        name: "gray/100",
        value: theme.colors.gray[100],
      },
      {
        name: "gray/050",
        value: theme.colors.gray[50],
      },
    ],
  },
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];
