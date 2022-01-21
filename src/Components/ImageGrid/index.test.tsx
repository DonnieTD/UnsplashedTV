import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import axios from "axios";
import { ImageGrid } from ".";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

test("Asks to select a topic", () => {
  const client = new QueryClient();

  render(
    <QueryClientProvider client={client}>
      <ImageGrid topic="holiday" />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Loading Pictures/i);
  expect(linkElement).toBeInTheDocument();
});
