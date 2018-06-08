/**
 * In ES6, there is a new keyword 'let' for block scoping
 * Scenario 1: Using { .. } to create block scope
 */

var me = 'global'
{
    let me = 'block'
    console.log(me) // block
}
console.log(me) // global

/**
 * Scenario 2: Implicit let declarations
 */
let a = 2

if (a > 1) {
    // b and c are block-scoped here
    let b = a * 3
    console.log(b) // 6

    for (let i = a; i <= b; i++) {
        // i and j are block-scoped here
        let j = i + 10
        console.log(j)
    }
    // 12 13 14 15 16

    let c = a + b
    console.log(c) // 8
}

/**
 * Scenario 3: let-declarations are not hoisted unlike var-declarations
 * Unlike 'var', early (stylistically) access using 'let' might lead to
 * Reference aka Temporal Dead Zone errors
 */

function letTDZError() {
    console.log(a) // undefined
    try {
        console.log(b) // ReferenceError
    } catch (error) {
        console.log(error.message) // b is not defined
    }

    var a = 2
    let b = 3
}

letTDZError()

/**
 * Scenario 4: typeof behavior - TDZ vs undeclared variables
 * Recommended to keep all 'let' declarations at the top to avoid TDZ errors
 */
function strangeTypeOf() {
    // 'undeclared_a' is not defined
    if (typeof undeclared_a === 'undefined') {
        console.log('cool')
    }

    try {
        // Temporal Dead Zone (TDZ) tdz_a
        if (typeof tdz_a === 'undefined') {
            // unreachable code
        }

        let tdz_a
    } catch (error) {
        console.log(error.message) // tdz_a is not defined
    }
}

strangeTypeOf()

/**
 * Scenario 5: for + let, a different closure
 * let forces a new variable to be created each iteration of the loop
 */

function closureTest() {
    let output_var = []
    let output_let = []

    for (var i = 0; i < 5; i++) {
        // closure over same outer variable 'i'
        output_var.push(function() {
            console.log(i)
        })
    }

    output_var[3]() // 5

    for (let j = 0; j < 5; j++) {
        // closure over different variable 'j'
        output_let.push(function() {
            console.log(j)
        })
    }

    output_let[3]() // 3
}

closureTest()

/**
 * Scenario 6: Constant variables
 */
function funcConstants() {
    const t = "can't change me!"
    console.log(t) // can't change me

    try {
        // cannot be changed once declared
        t = 3 // TypeError
    } catch (error) {
        console.log(error.message) // Assignment to constant variable
    }

    // 'const' variables must have explicit initialization
    // SyntaxError: Missing initializer in const declaration
    // const a;
}

funcConstants()

/**
 * Scenario 7: You can modify a const! (as in, what is assigned to const)
 * Constants are not restriction on value itself, but on the
 * variable's assignment of that value
 */
function funcConstants2() {
    // does not hold a constant array but has a constant reference to array
    // * use 'const' as a tool to signal intent instead of relying for code behavior
    // ! array will not be garbage collected until the arr's lexical scope goes away
    const arr = [1, 3, 5]

    arr.push(4)
    console.log(arr) // [1, 3, 5, 4]

    try {
        // cannot be changed once declared
        arr = [] // TypeError
    } catch (error) {
        console.log(error.message) // Assignment to constant variable
    }
}

funcConstants2()
