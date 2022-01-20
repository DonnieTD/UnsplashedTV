import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

test("renders learn react link", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  const linkElement = screen.getByText(/Please select a topic/i);
  await waitFor(() => expect(linkElement).toBeTruthy());
  expect(linkElement).toBeInTheDocument();
});
