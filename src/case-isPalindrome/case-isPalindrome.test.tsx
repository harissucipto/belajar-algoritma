import { describe, expect, it } from "vitest";
import { isPalindrome } from "./case-isPalindrome";

describe("isPalindrome", () => {
    it("should return true", () => {
        expect(isPalindrome("kasur ini rusak")).toBe(true);
    })
    it("should return false", () => {
        expect(isPalindrome("kasur itu rusak")).toBe(false);
    })
})
