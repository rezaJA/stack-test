import Stack from "../src/stack";

test("test can item be pushed to stack", () => {
    const stack = new Stack([3, 30]);
    stack.push(1);

    expect(stack.toArray()).toEqual([3, 30, 1]);
})

test("test can item be popped from stack", () => {
    const stack = new Stack([3, 33, 333]);

    expect(stack.pop()).toBe(333);
})

test("test can not push to full stack", () => {
    const stack = new Stack([10,8,39,20], 4);

    expect(stack.push(100)).toBe(false);
})

test("test can not pop from empty stack", () => {
    const stack = new Stack();

    expect(stack.pop()).toBe(false);
})