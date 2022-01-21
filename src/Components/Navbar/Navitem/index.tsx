import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export const Navitem: React.FC<{
  url: string;
  slug: string;
  onClick: () => void;
}> = ({ url, slug, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      justifyContent="left"
      alignItems="center"
      mb="2"
      mt="2"
      p="2"
      _hover={{
        background: "#666",
        borderRadius: "full",
        cursor: "pointer",
        color: "white",
      }}
    >
      <Image
        src={url + "&fit=crop&crop=entropy&w=50&h=50"}
        alt="Dan Abramov"
        boxSize="40px"
        borderRadius="full"
        mr="3"
      />
      {slug}
    </Flex>
  );
};
