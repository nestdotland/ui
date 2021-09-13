import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { config } from "./config";
import { styles } from "./styles";

const theme = extendTheme({
  colors,
  fonts,
  config,
  styles,
});

export default theme;
export { theme };
