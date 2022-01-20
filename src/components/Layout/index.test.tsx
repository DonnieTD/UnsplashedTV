import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Layout } from "./index";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

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
