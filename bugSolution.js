function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or null, or throw an error
  }
  return a + b;
}
//test cases
console.log(foo(5, 10)); // Output: 15
console.log(foo(5, 'hello')); //Output: NaN
console.log(foo(null, 10)); // Output: NaN