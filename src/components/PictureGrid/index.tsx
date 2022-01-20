import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { ImageGrid, InnerGrid, IconWrapper } from "./styles";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { Picture } from "./Picture";
import { CenteredPrompt } from "./CenteredPrompt";

export const PictureGrid: React.FC<{ topic: string; onClick: any }> = ({
  onClick,
  topic,
  ...rest
}) => {
  const [pictures, setPictures] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const { isLoading } = useQuery({
    enabled: topic !== "",
    queryKey: `${topic}/photos/${page}`,
    queryFn: () =>
      axios.get(`topics/${topic}/photos?per_page=8&page=${page}`, {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_SECRET,
        },
      }),
    onSuccess: (data) => {
      setPictures(data?.data);
    },
  });

  React.useEffect(() => {
    setPage(0);
  }, [topic]);

  if (isLoading) return <CenteredPrompt text="Loading.." />;

  if (topic === "")
    return <CenteredPrompt text="Please select a topic" {...rest} />;

  return (
    <InnerGrid onClick={onClick}>
      <IconWrapper>
        <ArrowLeftCircle
          style={{ height: "5vh" }}
          onClick={() =>
            setPage((page) => {
              if (page !== 1) {
                return page - 1;
              } else {
                return 1;
              }
            })
          }
        />
      </IconWrapper>
      <ImageGrid>
        {pictures && pictures.map((x: any) => <Picture x={x} />)}
      </ImageGrid>
      <IconWrapper>
        <ArrowRightCircle
          style={{ height: "5vh" }}
          onClick={() => setPage(page + 1)}
        />
      </IconWrapper>
    </InnerGrid>
  );
};
