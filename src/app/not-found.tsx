"use client";

import Link from "next/link";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex flexDir="column" flex={1}>
      <Flex
        flexDirection="column"
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          data-cy="oops-text"
          textAlign="center"
          fontWeight="medium"
          lineHeight="shorter"
          color="orange.300"
        >
          Oops...
        </Text>
        <Text
          data-cy="404-text"
          fontWeight="bold"
          fontSize="8xl"
          lineHeight="none"
        >
          404
        </Text>
        <Text
          data-cy="page-not-found-text"
          fontWeight="bold"
          fontSize="xl"
          lineHeight="taller"
          color="orange.300"
        >
          Page not found
        </Text>
        <Link data-cy="go-to-home-link" href="/">
          <Button
            data-cy="go-to-home-button"
            mt={6}
            px={10}
            colorScheme="orange"
          >
            Go to home
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
