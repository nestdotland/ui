import React from "react";
import { Flex, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

export interface HeaderProps extends HTMLChakraProps<"header"> {}

export function Header(props: HeaderProps) {
  return (
    <Flex
      as="header"
      direction="column"
      bg={useColorModeValue("white", "gray.900")}
      w="100%"
      mx="auto"
      px="4"
      py="10"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
