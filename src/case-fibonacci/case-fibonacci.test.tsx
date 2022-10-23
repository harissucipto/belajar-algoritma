import { describe, expect, it } from "vitest";

import { countFibonacciSequence } from "./case-fibonacci"

describe("countFibonacciSequence",()=>{
    it("should return 1", ()=>{
        expect(countFibonacciSequence(1)).toBe(1)
    })
    it("should return 1", ()=>{
        expect(countFibonacciSequence(2)).toBe(1)
    })
    it("should return 55", ()=>{
        expect(countFibonacciSequence(10)).toBe(55)
    })
    it("should return 6765", ()=>{
        expect(countFibonacciSequence(20)).toBe(6765)
    })
})