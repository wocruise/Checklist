### 1.VAR,LET
```
let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(window.a); // undefined
console.log(window.b); // 'world'
var a = 'hello';
var a = 'world'; // No problem, 'hello' is replaced.
let b = 'hello';
let b = 'world'; // SyntaxError: Identifier 'b' has already been declared
```

### 2.CONST
> variables defined by **const** behave like **let** variables but it can't reassignable
```
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```
> **const** objects can  change
```
const car = {type:"volvo", model:"C60", color:"black"};
car.color = "red";
car.owner = "Johnson";
```
> But can't reassigne a **const** object
```
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```