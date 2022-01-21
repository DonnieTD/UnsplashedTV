import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { Navbar } from ".";
import { QueryClient, QueryClientProvider } from "react-query";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

test("Title renders on navbar", () => {
  const client = new QueryClient();
  render(
    <QueryClientProvider client={client}>
      <Navbar setTopic={() => {}} />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Unsplash TV/i);
  expect(linkElement).toBeInTheDocument();
});
