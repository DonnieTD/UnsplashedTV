import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { SidebarWrapper } from "./styles";
import { Topic } from "./Topic";
import { TopicHeader } from "./TopicHeader";

export const Sidebar: React.FC<{
  setTopic: any;
  onClick: any;
  sideBarToggle: boolean;
}> = ({ onClick, sideBarToggle, setTopic, ...rest }) => {
  const { data, isLoading } = useQuery({
    queryKey: "topics",
    queryFn: () =>
      axios.get("topics", {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_SECRET,
        },
      }),
  });

  if (isLoading) return <div {...rest}>Loading</div>;

  return (
    <SidebarWrapper onClick={onClick} {...rest}>
      {sideBarToggle && (
        <>
          <TopicHeader />
          {data?.data.map((x: any) => (
            <Topic text={x?.slug} onClick={() => setTopic(x?.slug)} />
          ))}
        </>
      )}
    </SidebarWrapper>
  );
};
