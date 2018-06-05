/**
 * Scenario 1: Flatten arrays
 */

function foo(x, y, z) {
    console.log(x, y, z);
}
foo(...[1,3,5]); // 1 3 5

// ES5 equivalent
foo.apply(null, [1,3,5]); // 1 3 5

/**
 * Scenario 2: Concatenate arrays
 */

var arr = [2,3,4];
var arr1 = [1,...arr,5];
console.log(arr1);

/**
 * Scenario 3: Gather some arguments
 */

function bar(x, y, ...z) {
    console.log(x, y, z);
}
bar(1,2,3,4,5);

/**
 * Scenario 4: Replacing arguments
 */

function baz(...args) {
    args.shift();
    console.log(args);
}
baz.apply(null, [1,2,3,4,5]);

