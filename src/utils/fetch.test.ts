import { fetch } from "./fetch";

describe("fetch", () => {
  describe("when the error occured", () => {
    it("contains error message", async () => {
      const fakeError = Promise.reject(new Error("Internal Server error"));
      window.fetch = jest.fn(() => fakeError);

      const [error, result] = await fetch("/foo/bar");
      expect(error).toEqual("Internal Server error");
      expect(result).toBeUndefined();
    });
  });
});
