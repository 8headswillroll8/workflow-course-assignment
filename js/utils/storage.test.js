import { expect, it, describe, beforeEach } from "vitest";
import { getUsername } from "./storage";

describe("Storage functions", () => {
  beforeEach(() => {
    const storage = {};

    globalThis.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  describe("getUsername", () => {
    it("Returns the name from the user object in storage", () => {
      const user = {
        name: "username123",
      };

      localStorage.setItem("user", JSON.stringify(user));

      const result = getUsername();

      expect(result).toBe("username123");
    });

    it("Returns null when no user exists in storage", () => {
      const result = getUsername();

      expect(result).toBe(null);
    });
  });
});
