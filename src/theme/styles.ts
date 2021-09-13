import { mode, GlobalStyleProps, GlobalStyles } from "@chakra-ui/theme-tools";

export default styles;
export const styles: GlobalStyles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("white", "gray.800")(props),
    },
  }),
};
