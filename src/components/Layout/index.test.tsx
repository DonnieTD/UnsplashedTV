import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Layout } from "./index";
import { QueryClient, QueryClientProvider } from "react-query";
import nock from "nock";
import { PhotosTestData, TopicsTestData } from "../../testdata";

const queryClient = new QueryClient();

const expectation = nock("https://api.unsplash.com/")
  .get("/topics")
  .reply(200, TopicsTestData);

test("Sidebar shows up", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );

  const linkElement = screen.getByTestId("side-bar");
  await waitFor(() => expect(linkElement).toBeTruthy());
  expect(linkElement).toBeInTheDocument();
});

test("Picture Grid shows up", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );

  const linkElement = screen.getByTestId("picture-grid");
  await waitFor(() => expect(linkElement).toBeTruthy());
  expect(linkElement).toBeInTheDocument();
});
