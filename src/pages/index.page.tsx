import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" flex={1}>
      <Flex flex={1} alignItems="center" justifyContent="center">
        <Text data-cy="title" fontSize="2xl" fontWeight="bold">
          Boilerplate NextJS 13
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
