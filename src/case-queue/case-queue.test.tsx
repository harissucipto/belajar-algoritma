import { describe, expect, it } from "vitest";

import { Queue } from "./case-queue";

describe("Queue", () => {

  it("should return 1 in queue lists", () => {
    const q = new Queue();
    expect(q.enqueue(20)).toBe(1)
  });
  it("should return 2 in queue lists", () => {
    const q = new Queue();
    q.enqueue(20)
    expect(q.enqueue(15)).toBe(2)
  });
  it("should return 3 in queue lists", () => {
    const q = new Queue();
    q.enqueue(20)
    q.enqueue(15)
    expect(q.enqueue(30)).toBe(3)
  });
  it("should return 20 for first dequeue", () => {
    const q = new Queue();
    q.enqueue(20)
    q.enqueue(15)
    q.enqueue(30)
   
    expect(q.dequeue()).toBe(20)
  });
  it("should return 15 for second dequeue", () => {
    const q = new Queue();
    q.enqueue(20)
    q.enqueue(15)
    q.enqueue(30)
    q.dequeue()
    expect(q.dequeue()).toBe(15)
  });
  it("should return 30 for third dequeue", () => {
    const q = new Queue();
    q.enqueue(20)
    q.enqueue(15)
    q.enqueue(30)
    q.dequeue()
    q.dequeue()
    expect(q.dequeue()).toBe(30)
  });
});
