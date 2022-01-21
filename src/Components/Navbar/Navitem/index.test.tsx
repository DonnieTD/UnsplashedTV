import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { Navitem } from ".";
axios.defaults.adapter = require("axios/lib/adapters/http");
axios.defaults.baseURL = "https://api.unsplash.com/";

test("Navitem renders slug", () => {
  render(
    <Navitem
      onClick={() => {}}
      url="https://images.unsplash.com/photo-1642141257853-ab83e9771b8c?ixid=MnwyOTMwMDN8MHwxfHRvcGljfHxpVUlzblZ0akIwWXx8fHx8Mnx8MTY0Mjc1MTQyNA&ixlib=rb-1.2.1&fit=crop&crop=entropy&w=650&h=400&dpr=1"
      slug="test"
    />
  );
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
