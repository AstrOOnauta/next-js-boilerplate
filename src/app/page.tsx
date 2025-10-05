"use client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex flexDir="column" flex={1}>
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text data-cy="title" fontSize="2xl" fontWeight="bold">
          Boilerplate Next JS
        </Text>
      </Flex>
    </Flex>
  );
}
