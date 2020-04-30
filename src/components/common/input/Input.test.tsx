import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

test("renders Input component", () => {
  const callback = jest.fn();
  const { getByTestId } = render(
    <Input
      name="foo"
      type="text"
      placeholder="lorem ipsum"
      onChange={callback}
    />
  );

  const inputElement = getByTestId("input") as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: "foo" } });

  expect(inputElement.value).toBe("foo");
  expect(callback).toHaveBeenCalled();
  expect(inputElement).toMatchSnapshot();
});
