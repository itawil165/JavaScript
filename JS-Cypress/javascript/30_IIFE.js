// **IMMEDIATELY INVOKED FUNCTION EXPRESSIONS**

// Normal invoked function
function greet01() {
    console.log('Hello');
}
greet01();


// IIFE
(function greet02() {
    console.log('Hey');
})();