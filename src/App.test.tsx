import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

const server = setupServer(
  rest.get("https://api.unsplash.com/topics", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          slug: "blockchain",
          cover_photo: {
            urls: {
              raw: "",
            },
          },
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Initial Render tests", () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  test("Asks to select a topic", () => {
    render(
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    );
    const linkElement = screen.getByText(/Please select a topic/i);
    expect(linkElement).toBeInTheDocument();
  });
});
