import { fetch } from "./fetch";

describe("fetch", () => {
  describe("when the error occured", () => {
    it("contains error message", async () => {
      const fakeError = Promise.reject(new Error("Internal Server error"));

      window.fetch = jest.fn().mockImplementation(() => fakeError);

      const [error, result] = await fetch("/foo/bar");
      expect(error).toEqual("Internal Server error");
      expect(result).toBeUndefined();

      jest.clearAllMocks();
    });
  });

  describe("when the request succeed", () => {
    it("contains response data", async () => {
      interface Foo {
        foo: "bar";
      }

      const fakeResponse = Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ foo: "bar" }),
      });

      window.fetch = jest.fn().mockImplementation(() => fakeResponse);

      const [error, result] = await fetch<Foo>("/foo/bar");

      expect(error).toBeUndefined();
      expect(result.foo).toEqual("bar");

      jest.clearAllMocks();
    });
  });
});
