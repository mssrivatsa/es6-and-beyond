/**
 * Scenario 1: function scoping
 * Function is a fundamental unit of variable scoping in ES5
 */

function someFunc() {
    var a = 'My scope is someFunc'
    console.log(a)
}

someFunc() // 'My scope is someFunc'

/**
 * Scenario 2: IIFE scoping
 * IIFE is a special function that is immediately executed
 */

;(function someIIFE() {
    var a = 'My scope is someIIFE'
    console.log(a)
})() // 'My scope is someIIFE

try {
    console.log(a) // ReferenceError
} catch (error) {
    console.log(error.message) // a is not defined
}
