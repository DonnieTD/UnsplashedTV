import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Heading,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { Navitem } from "./Navitem";

export const Navbar: React.FC<{
  setTopic: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ setTopic }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { data, isLoading } = useQuery({
    queryKey: "topics",
    queryFn: () =>
      axios.get("topics", {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_SECRET,
        },
      }),
  });

  return (
    <SimpleGrid
      h={"10vh"}
      columns={2}
      background="linear-gradient(35deg,#e43f25,#e69224,#e69224)"
    >
      <Box display="flex" alignItems="center" justifyContent="left">
        <Heading marginLeft="1.5vw" color="white">
          Unsplash TV
        </Heading>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="right">
        {!isLoading && (
          <Button
            backgroundColor="transparent"
            color="white"
            marginRight="1.5vw"
            border="solid 1px white"
            onClick={onOpen}
            _hover={{
              background: "transparent",
            }}
          >
            Topics
          </Button>
        )}
      </Box>
      <Drawer
        autoFocus={true}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={true}
        onOverlayClick={onClose}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box
            height="10vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(35deg,#e43f25,#e69224,#e69224)"
          >
            <Heading color="white" size="md">
              Select a topic:
            </Heading>
          </Box>
          {data?.data.map((x: any) => (
            <Navitem
              slug={x?.slug}
              url={x?.cover_photo.urls.raw}
              onClick={() => setTopic(x?.slug)}
            />
          ))}
        </DrawerContent>
      </Drawer>
    </SimpleGrid>
  );
};
