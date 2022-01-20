import React from "react";

export const Picture: React.FC<{ x: any }> = ({ x }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "70%",
          maxHeight: "70%",
          display: "inline-block",
        }}
        src={x?.urls.regular}
        alt="grid"
      />
    </div>
  );
};
