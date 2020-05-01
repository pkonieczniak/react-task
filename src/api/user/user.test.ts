// TODO: Improve mocking for the named imports, and clean up tests

jest.mock("../../utils", () => {
  return {
    __esModule: true,
    fetch: jest.fn(() =>
      Promise.resolve([
        undefined,
        [
          { id: 1, name: "foo" },
          { id: 2, name: "bar" },
        ],
      ])
    ),
  };
});

import { getUsers } from ".";

describe("getUsers", () => {
  it("returns the list of users", async () => {
    expect(await getUsers()).toMatchSnapshot();
  });
});
