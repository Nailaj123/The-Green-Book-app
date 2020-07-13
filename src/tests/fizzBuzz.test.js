
const fizzBuzz = require('./fizzBuzz')

test('num divisible by 3 and 5 returns `FizzBuzz`', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
})

test("num divisible by 3 returns `Fizz`", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
});

test("num divisible by 5 returns `Buzz`", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
});

test("num not divisible by 3 and 5 returns num", () => {
    expect(fizzBuzz(8)).toBe(8);
});

test("numString not divisible by 3 and 5 returns num", () => {
    expect(fizzBuzz("8")).toBe(8);
});

test("`numString` divisible by 3 and 5 returns `FizzBuzz`", () => {
    expect(fizzBuzz("15")).toBe(`FizzBuzz`);
});

test("`numString` divisible by 3 returns `Fizz`", () => {
    expect(fizzBuzz("9")).toBe("Fizz");
});

test("`numString` divisible by 5 returns `Buzz`", () => {
    expect(fizzBuzz("10")).toBe("Buzz");
});