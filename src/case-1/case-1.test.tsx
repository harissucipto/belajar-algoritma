import { describe, expect, it } from "vitest";

import { countTwoNumbers } from "./case-1";

describe("countTwoNumbers", () => {
  it("should return 3", () => {
    expect(countTwoNumbers(1, 2)).toBe(3);
  });
});
