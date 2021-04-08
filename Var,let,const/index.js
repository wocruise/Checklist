//let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
//console.log(window.a); // undefined
//console.log(window.b); // 'world'
var a = 'hello';
var a = 'world'; // No problem, 'hello' is replaced.
//let b = 'hello';
//let b = 'world'; // SyntaxError: Identifier 'b' has already been declared

/*__________________________________CONST______________________________________ */
const car = { type: "volvo", model: "C60", color: "black" };
car.color = "red";
car.owner = "Johnson";

console.log(car);