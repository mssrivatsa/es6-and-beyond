/**
 * Scenario 1: ES5 Manual assignment of array values
 */
function foo() {
    return [1, 3, 5]
}
var tmp = foo(),
    a = tmp[0],
    b = tmp[1],
    c = tmp[2]
console.log(a, b, c) // 1 3 5

/**
 * Scenario 2: ES6 auto assignment of array values using destructuring
 */
;[a, b, c] = foo()
console.log(a, b, c) // 1 3 5

/**
 * Scenario 3: ES6 auto assignment (with declaration) of object properties using destructuring
 */
function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}
var { x, y, z } = bar()
console.log(x, y, z) // 4 5 6

/**
 * Scenario 4: ES6 auto assignment (without declaration) of object properties using destructuring
 */
;({ x, y, z } = { x: 9, y: 8, z: 7 })
console.log(x, y, z) // 9 8 7

/**
 * Scenario 5: ES6 auto assignment using destructuring - long form
 */
var { x: x, y: y, z: z } = { x: 4, y: 5, z: 6 }
console.log(x, y, z) // 4 5 6

/**
 * Scenario 6: ES6 destructuring with different source and target names
 */
var { x: foo, y: bar, z: baz } = { x: 9, y: 8, z: 7 }
console.log(foo, bar, baz) // 9 8 7

/**
 * Scenario 7: ES6 destructuring - target -> source
 * ! gotcha - destructuring is target mapping
 */
var { i, j, k } = { x: 9, y: 8, z: 7 }
console.log(i, j, k) // undefined undefined undefined

/**
 * Scenario 8: Swapping variables using destructuring
 */
var first = 10,
    second = ((20)[(second, first)] = [first, second])
console.log(first, second) // 20 10

/**
 * Scenario 9: Repeated assignments using destructuring
 */
var { a: X, a: Y } = { a: 99 }
console.log(X, Y) // 99 99

var {
    a: { x: X, x: Y },
    a
} = { a: { x: 1 } }
console.log(X, Y, a) // 1 1 {x:1}

{
    ({
        a: X,
        a: Y,
        a: [Z]
    } = { a: [1] })
    X.push(2)
    Y[0] = 10
    console.log(X, Y, Z) // [ 10, 2 ] [ 10, 2 ] 1
}

/**
 * Scenario 10: Flexible assignment using destructuring
 */
var [, second] = [1, 2, 3]
console.log(second) // 2

function test() {
    return {
        x:-1,
        y:-2,
        z:0
    }
}

var {x,z} = test()
var {y} = test()
console.log(x, z) // -1 0
console.log(y) // -2

