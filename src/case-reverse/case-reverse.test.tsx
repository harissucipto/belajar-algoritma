import { describe, expect, it } from "vitest";

import { reverse } from "./case-reverse";

describe("reverse", () => {
  it("should reverse hello word to drow olleh", () => {
    expect(reverse("hello word")).toBe("drow olleh");
  });
  it("should reverse drow olleh to hello word", () => {
    expect(reverse("drow olleh")).toBe("hello word");
  });
});
