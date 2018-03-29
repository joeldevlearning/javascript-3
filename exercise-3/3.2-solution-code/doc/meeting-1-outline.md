#Meeting #1 Outline

### 0.1 - Variables and Functions, Living Together!

#### Declare a variable (`var`, `let`, `const`)
ES5 had var, which was function-scoped (leading to a behavior called "hoisting")

ES6 has let (not hoisted) and const (protected by copy-on-write), which are block-scoped

can only declare let/const ONCE in a single scope, else error

can't be used before being declared (in line order of source code)

var in contrast has no protections; silently redeclared 

const specifically has an extra protection - you cannot redeclare it (but you can redeclare a const object's properties)

Simple rule: If you want reassignment, use let; if you don't, use const

we'll use let and const regularly from now on... block scoping is simpler to reason about

#### Declare a function in a variable

There are many ways to declare a function in Javascript. 

1. For example, the classic way:
```javascript
greeting(){console.log('hello world!')} //declare, function declaration
function fn() 
greeting(); //call
```

2. And via a function expression:
```javascript
let greeting = function greet(){console.log('hello world!')} //declare function expression
greeting(); //call
```

3. Also And via a an anonymous function, assigned to a variable:
```javascript
let greeting = function(){console.log('hello world!')} 
//declare anonymous function in a variable
greeting();
```

4. And even an immediately invoked function (that creates a closure):
```javascript
let greeting = (function(){  //the name "greeting" is assigned to this outer function
return function(){console.log('hello world'} //this inner function is effectively private
}) (); //we immediately invoke the inner and outer functions
//the inner function is captured in a closure, which is assigned to greeing
greeting();
```

#### The arrow function in ES6
ES6 has a new syntax with some special features: Arrow Functions!
```javascript
function howOld() {return "Javascript is " + ((new Date()).getFullYear() - 1995) + " year's old")}
console.log(howOld());
//We can rewrite this as an arrow function in two ways

//Option 1#, declare the function like this:
let howOld = () => "Javascript is " + ((new Date()).getFullYear() - 1995) + " year's old"; 
//no "function" keyword, fat arrow, no "return keyword"
console.log(howOld());

//Option #2, use the function one-time, anonymously
console.log(() => "Javascript is " + ((new Date()).getFullYear() - 1995) + " year's old");



```
Arrow functions have the following features:

- **do not** need `function` keyword
- if they only contain one expression (one semicolon's worth of code), then **do not** need `return` keyword or brackets `{}`
- you can use them one-time in place anonymously, or assign them to a variable


- they need a fat arrow `=>` after the parentheses `()`, i.e. `(param) => "hello world!"`

#### Arrow Function Examples:

`````javascript
let greeting = () => console.log('Hello there!');
`````

````javascript
let add = (x, y) => x+y; 
````

```javascript
let average = (...numbers) => {
let total = numbers.length;
let sum = numbers.reduce((a, b) => a + b, 0)
return sum/total;
}
console.log( average(1,5,10,15,20));`
```
[TODO: explain that `this` parameter inside an arrow function is borrowed from the calling context; other functions create their own value for this, but not arrow functions]

#### Pass a function to another function

Todo

### 0.2 - Arrgh!!! Arrays ahoy!!

#### use array methods to achieve wealth and infamy

TODO 

TODO chaining example

### 0.3 - challenge, generate data, filter it, map it, and reduce

TODO generate numbers, filter for prime numbers, map them sets of n, and sum each set

e.g. numbers.generate().filter(isPrime()).map(toThreePerSet()).reduce(sumBySet()) 

### 

### 0.4 - Use Objects (and classes?!?) to model data

TODO model movies, via object literal and also with a class



### 0.5 - challenge, model a dataset 

TODO put movie objects in a catalogue object and create a search method to retrieve a movie based on string in the title









































