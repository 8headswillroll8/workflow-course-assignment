import { expect, test, describe } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  test("Returns true when current path matches href exactly", () => {
    const href = "/venues";
    const currentPath = "/venues";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  test("Returns true for root path and index.html path", () => {
    const href = "/";
    const currentPath = "/index.html";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  test("Returns true when current path includes the href", () => {
    const href = "/venues";
    const currentPath = "/venues/123";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(true);
  });

  test("Returns false when paths don't match", () => {
    const href = "/venue";
    const currentPath = "/common";

    const result = isActivePath(href, currentPath);

    expect(result).toBe(false);
  });
});
