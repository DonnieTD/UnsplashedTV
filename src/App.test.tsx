import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

test("Asks to select a topic", () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Please select a topic/i);
  expect(linkElement).toBeInTheDocument();
});
