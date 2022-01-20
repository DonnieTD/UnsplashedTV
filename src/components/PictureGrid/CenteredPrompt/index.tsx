import React from "react";

export const CenteredPrompt: React.FC<{ text: string }> = ({
  text,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...rest}
    >
      <h1>{text}</h1>
    </div>
  );
};
