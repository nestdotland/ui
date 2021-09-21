import React from "react";
import {
  Flex,
  HTMLChakraProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Vercel from "./Vercel";

export interface FooterProps extends HTMLChakraProps<"footer"> {}

export function Footer(props: FooterProps) {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      p="6"
      w="full"
      height="5rem"
      maxW="8xl"
      bg={useColorModeValue("white", "gray.900")}
      {...props}
    >
      <Text fontFamily="mono">
        Made with
        <Text
          px="1ch"
          as="span"
          color={useColorModeValue("red.600", "red.400")}
        >
          &amp;hearts;
        </Text>
        for Deno Community.
      </Text>
      <Flex
        as="a"
        align="center"
        href="https://vercel.com/?utm_source=nest-land&utm_campaign=oss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Vercel />
      </Flex>
    </Flex>
  );
}
