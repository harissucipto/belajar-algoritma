import { describe, expect, it } from "vitest";

import { Stack } from "./case-stack";

describe("Stack", () => {
    it("should return 30 for first value", ()=>{
        const stack = new Stack();
        stack.push(20);
        stack.push(15);
        stack.push(30);
        expect(stack.first?.value).toBe(30)
    });
    it("should return 20 for last value", ()=>{
        const stack = new Stack();
        stack.push(20);
        stack.push(15);
        stack.push(30);
        expect(stack.last?.value).toBe(20)
    });
    it("should return 15 for first value after being pop", ()=>{
        const stack = new Stack();
        stack.push(20);
        stack.push(15);
        stack.push(30);
        stack.pop();
        expect(stack.first?.value).toBe(15)
    });
    it("should return 20 for first value after being pop", ()=>{
        const stack = new Stack();
        stack.push(20);
        stack.push(15);
        stack.push(30);
        stack.pop();
        stack.pop();
        expect(stack.first?.value).toBe(20)
    });
})
