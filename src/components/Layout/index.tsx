import React from "react";
import { PictureGrid } from "../PictureGrid";
import { Sidebar } from "../Sidebar";
import { LayoutWrapper } from "./styles";

export const Layout = () => {
  const [sideBarToggle, setSideBarToggle] = React.useState(true);
  const [topic, setTopic] = React.useState("");

  return (
    <LayoutWrapper toggle={sideBarToggle}>
      <Sidebar
        data-testid="side-bar"
        setTopic={setTopic}
        sideBarToggle={sideBarToggle}
        onClick={() => setSideBarToggle(true)}
      />
      <PictureGrid
        data-testid="picture-grid"
        topic={topic}
        onClick={() => setSideBarToggle(false)}
      />
    </LayoutWrapper>
  );
};
