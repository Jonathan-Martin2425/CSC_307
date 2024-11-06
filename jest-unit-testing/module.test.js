// JavaScript source code
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

test('Testing sum type_error -- success', () => {
    expect(() => mut.sum("string", 1).toThrow(TypeError));
});

test('Testing sum concate -- success', () => {
    const expected = "First, Second.";
    const got = mut.sum("First, ", "Second.");
    expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 5;
    const got = mut.div(10, 2);
    expect(got).toBe(expected);
});

test('Testing div string+int TypeError -- success', () => {
    expect(() => mut.div("string", 1).toThrow(TypeError));
});

test('Testing div string+string TypeError -- success', () => {
    expect(() => mut.div("First, ", "Second.").toThrow(TypeError));
});

test('Testing conntainsNumbers emptyStr -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
});

test('Testing conntainsNumbers left edge -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("1sdkjbdfb vhevbj=");
    expect(got).toBe(expected);
});


test('Testing conntainsNumbers right edge -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("sdkjbdfb vhevbj=5");
    expect(got).toBe(expected);
});


test('Testing conntainsNumbers middle -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("sdkjbdfb 4 vhevbj=");
    expect(got).toBe(expected);
});

test('Testing conntainsNumbers one -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("4");
    expect(got).toBe(expected);
});

//fails due to '\n' counting as a number which it shouldn't
test('Testing conntainsNumbers newline -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("some stuff\n some more stuff");
    expect(got).toBe(expected);
});

test('Testing div invalid input TypeError -- success', () => {
    expect(() => mut.containsNumbers(1748).toThrow(TypeError));
    expect(() => mut.containsNumbers(null).toThrow(TypeError));
    expect(() => mut.containsNumbers({}).toThrow(TypeError));
});

