import React from "react";
import {
  chakra,
  Flex,
  Icon,
  Button,
  IconButton,
  ButtonGroup,
  Link,
  useColorMode,
  useColorModeValue,
  HTMLChakraProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconType } from "react-icons";
import Logo from "./Logo";

export interface NavbarProps extends HTMLChakraProps<"nav"> {
  pages: {
    name: string;
    link: string;
    active?: boolean;
  }[];
  socials: {
    name: string;
    link: string;
    icon: IconType;
  }[];
}

export function Navbar({ pages, socials, ...props }: NavbarProps) {
  const bg = useColorModeValue("white", "gray.900");

  const { toggleColorMode: toggleMode } = useColorMode();
  const colorModeName = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <chakra.nav
      pos="sticky"
      top="0"
      zIndex="3"
      bg={bg}
      left="0"
      right="0"
      width="full"
      height="5rem"
      mx="auto"
      maxW="8xl"
      {...props}
    >
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center">
          <Link href="/" display="block" aria-label="Home">
            <Logo />
          </Link>
        </Flex>

        <Flex
          justify="flex-end"
          w="100%"
          align="center"
          color="gray.400"
          maxW="1100px"
        >
          <ButtonGroup spacing="2" size="md">
            {pages.map((page) => (
              <Button
                as="a"
                key={page.link}
                href={page.link}
                variant={page.active ? undefined : "ghost"}
                color={page.active ? undefined : "current"}
                colorScheme={page.active ? "primary" : undefined}
              >
                {page.name}
              </Button>
            ))}

            {socials.map((social) => (
              <Link
                aria-label={social.name}
                key={social.name}
                href={social.link}
              >
                <IconButton
                  fontSize="lg"
                  aria-label={social.name}
                  variant="ghost"
                  color="current"
                  icon={<Icon as={social.icon} />}
                />
              </Link>
            ))}

            <IconButton
              fontSize="md"
              aria-label={`Switch to ${colorModeName} mode`}
              variant="ghost"
              color="current"
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </ButtonGroup>
        </Flex>
      </Flex>
    </chakra.nav>
  );
}
