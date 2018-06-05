/**
 * Scenario 1: ES5 default arguments - pitfall 1 with falsy values
 */

function add(x, y) {
    x = x || 10;
    y = y || 5;
    return x + y;
}

console.log(add(0, 5)); // 15 instead of 5
console.log(add(null, 5)); // 5 instead of 15


/**
 * Scenario 2: ES5 default arguments - pitfall 2 with undefined
 */

function add(x, y) {
    x = (x !== undefined) ? x : 10;
    y = (y !== undefined) ? y : 5;
    return x + y;
}

console.log(add(undefined, 5));
console.log(add(5));

/**
 * Scenario 3: Default parameters in ES6
 */
function foo(x = 10, y = 5) {
    return x + y;
}

console.log(foo()); // 15
console.log(foo(undefined, 10)); // 20 with default x = 10
console.log(foo(null, 10)); // 10 with x coerced to 0
console.log(foo(5, undefined)); // 10 with default y = 5
console.log(foo(10, null)); // 10 with y coerced to 0


/**
 * Scenario 4: Default value expressions in ES6
 */
function bar(val) {
    console.log("bar called!");
    return y + val;
}

function baz(x = y + 3, z = bar(x)) {
    console.log(x, z);
}

let y = 5;
baz(); // bar called 8 13
baz(9); // bar called 9 14
baz(undefined, 10); // 8 10 - x treated as missing

/**
 * Scenario 5: Formal parameters have their own scope
 * ! results in TDZ error if formal parameter is not initialized
 */

let z = 10, k = 5;
function testFormalScope(x = z + 1, k = k + 1) {
    console.log(x, y);
}
testFormalScope(); // ReferenceError at k = k + 1