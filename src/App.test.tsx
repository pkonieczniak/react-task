import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("renders App component", () => {
  const { baseElement } = render(<App />);
  expect(baseElement instanceof HTMLBodyElement).toBeTruthy();
});

test("an URL for JSON placeholder api is defined", () => {
  expect(process.env.REACT_APP_JSON_PLACEHOLDER_API_URL).toEqual(
    "https://jsonplaceholder.typicode.com/"
  );
});
