const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("should display greeting for name", () => {
    const result = generateGreeting("tester");
    expect(result).toBe("Hello tester!"); 
});

test("should display greeting for no name", () => {
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous!"); 
});