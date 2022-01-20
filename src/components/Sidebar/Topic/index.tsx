import React from "react";
import { TopicWrapper } from "./styles";

export const Topic: React.FC<{ onClick: any; text: string }> = ({
  onClick,
  text,
}) => {
  return <TopicWrapper onClick={onClick}>{text}</TopicWrapper>;
};
