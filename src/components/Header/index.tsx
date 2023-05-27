import { Flex, Text } from "@chakra-ui/react";

import ThemeButton from "../ThemeButton";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Flex justifyContent="space-between">
      <Flex />
      <Text>{title}</Text>
      <ThemeButton aria-label="Toggle light-dark mode" />
    </Flex>
  );
}
