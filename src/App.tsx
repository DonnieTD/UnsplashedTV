import React from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar";
import { ImageGrid } from "./Components/ImageGrid";

function App() {
  const [topic, setTopic] = React.useState<null | string>(null);

  return (
    <Box h={"100vh"}>
      <Navbar setTopic={setTopic} />
      <Box h={"90vh"}>
        <ImageGrid topic={topic} />
      </Box>
    </Box>
  );
}

export default App;
