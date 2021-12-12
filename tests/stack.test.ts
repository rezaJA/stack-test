import Stack from "../src/stack";


const createStackWithInitialItems = <T>(initialItems: T[] = [], size: number = 10) => {
    const stack = new Stack<T>(size);
    for (let item of initialItems)
        stack.push(item);

    return stack;
}

test("test stack can be initialzed", () => {
    const stack = createStackWithInitialItems();
    expect(JSON.stringify(stack)).toEqual(JSON.stringify(new Stack()));
})

test("test can item be pushed to stack", () => {
    const stack = createStackWithInitialItems();
    stack.push(3);

    expect(stack.top()).toBe(3);
})

test("test can item be poped from stack", () => {
    const stack = createStackWithInitialItems([4]);

    expect(stack.pop()).toBe(4);
})

test("test can not push to full stack", () => {
    const stack = createStackWithInitialItems([10,8,39,20], 4);

    expect(stack.push(100)).toBe(false);
})

test("test can not pop from empty stack", () => {
    const stack = createStackWithInitialItems();

    expect(stack.pop()).toBe(false);
})

test("test if pushed items in right order", () => {
    const stack = createStackWithInitialItems();
    stack.push(3);
    stack.push(5);
    stack.push(4);

    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(3);
})