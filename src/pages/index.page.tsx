import type { NextPage } from "next";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" flex={1}>
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text data-cy="title" fontSize="2xl" fontWeight="bold">
          Boilerplate NextJS 13
        </Text>
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

export default Home;
