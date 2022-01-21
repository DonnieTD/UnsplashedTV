import { Box, Center, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useQuery } from "react-query";

export const ImageGrid: React.FC<{ topic: string | null }> = ({ topic }) => {
  const [images, setImages] = React.useState([]);
  const [displayed, setDisplayed] = React.useState([]);
  const [cursor, setCursor] = React.useState(0);

  const { isLoading } = useQuery({
    enabled: topic !== null,
    queryKey: `${topic}/photos`,
    queryFn: () =>
      axios.get(`topics/${topic}/photos?per_page=100&page=0`, {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_SECRET,
        },
      }),
    onSuccess: ({ data }) => {
      setDisplayed([]);
      setCursor(0);
      setImages(data);
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    setDisplayed(images.slice(cursor, 6 + cursor));
  }, [cursor, images, setDisplayed]);

  if (topic === null)
    return (
      <Center h={"80vh"}>
        <Heading size="lg">Please select a topic</Heading>
      </Center>
    );

  if (isLoading)
    return (
      <Center h={"80vh"}>
        <Heading size="lg">Loading Pictures</Heading>
      </Center>
    );

  return (
    <>
      <Grid
        h={"80vh"}
        className="grid-rail"
        templateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr"
        gridGap={5}
        gap={3}
        p={4}
      >
        {displayed.map((x: any, i: number) =>
          i % 2 !== 0 ? (
            <Image
              key={x?.urls.raw}
              src={x?.urls.raw + "&fit=crop&crop=entropy&w=650&h=400&dpr=1"}
              maxW="100%"
              minW="100%"
            />
          ) : (
            ""
          )
        )}
        {displayed.map((x: any, i: number) =>
          i % 2 === 0 ? (
            <Image
              key={x?.urls.raw}
              src={x?.urls.raw + "&fit=crop&crop=entropy&w=650&h=400&dpr=1"}
              maxW="100%"
              minW="100%"
            />
          ) : (
            ""
          )
        )}
      </Grid>
      <Center position="relative" top="4vh">
        <AiFillLeftCircle
          fontSize="4vh"
          onClick={() => {
            if (cursor !== 0) {
              setCursor(cursor - 2);
            }
          }}
        />
        <AiFillRightCircle
          fontSize="4vh"
          onClick={() => {
            if (cursor + 2 < images.length) {
              setCursor(cursor + 2);
            }
          }}
        />
      </Center>
    </>
  );
};
