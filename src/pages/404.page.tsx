import type { NextPage } from "next";
import Link from "next/link";
import { Button, Flex, Text } from "@chakra-ui/react";

const NotFound: NextPage = () => {
  return (
    <Flex flexDir="column" flex={1}>
      <Flex
        flexDirection="column"
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          fontWeight="medium"
          lineHeight="shorter"
          color="orange.300"
        >
          Oops...
        </Text>
        <Text fontWeight="bold" fontSize="8xl" lineHeight="none">
          404
        </Text>
        <Text
          fontWeight="bold"
          fontSize="xl"
          lineHeight="taller"
          color="orange.300"
        >
          Page not found
        </Text>
        <Link href="/">
          <Button mt={6} px={10} colorScheme="orange">
            Go to home
          </Button>
        </Link>
      </Flex>
      <Flex justifyContent="center">
        <Text mr={1} fontWeight="medium">
          Powered by
        </Text>
        <Link
          data-cy="author-link"
          href="https://github.com/AstrOOnauta/"
          target="_blank"
          rel="noreferrer"
        >
          <Text data-cy="author-name" color="orange.300" fontWeight="semibold">
            AstrOOnauta
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NotFound;
