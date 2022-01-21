import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { Navbar } from ".";
import { QueryClient, QueryClientProvider } from "react-query";
import { setupServer } from "msw/node";
import { rest } from "msw";
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

describe("Navbar Tests", () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  test("Title renders on navbar", () => {
    render(
      <QueryClientProvider client={client}>
        <Navbar setTopic={() => {}} />
      </QueryClientProvider>
    );
    const linkElement = screen.getByText(/Unsplash TV/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Loads topics and displays the button", async () => {
    render(
      <QueryClientProvider client={client}>
        <Navbar setTopic={() => {}} />
      </QueryClientProvider>
    );
    const topics = await screen.findByText("Topics");
    expect(topics).toBeInTheDocument();
  });

  test("Clicking the button opens the drawer", async () => {
    render(
      <QueryClientProvider client={client}>
        <Navbar setTopic={() => {}} />
      </QueryClientProvider>
    );
    fireEvent(
      await screen.findByText("Topics"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const blockchaintext = await screen.findByText("blockchain");
    expect(blockchaintext).toBeInTheDocument();
  });
});
