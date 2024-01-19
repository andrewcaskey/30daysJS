# Booleans
Boolean data type represents one of two values :true or false 


```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

```
### Truthy Values 
- All numbers (positive and negative) are truthy except zero
- All strings are truthy except an empty string (")
- The boolean true

### Falsy Values
- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

### Undefined 
If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

### Null 
```js
let empty = null
console.log(empty) // -> null , means no valu
```

### Operators

An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

![Alt text](https://30dayjavascript.js.org/images/assignment_operators.png)

### Arithmetic Operators 
Arithmetic operators are mathematical operators.

- Addition(+): a + b
- Subtraction(-): a - b
- Multiplication(*): a * b
- Division(/): a / b
- Modulus(%): a % b
- Exponential(**): a ** b

### Comparison Operators 
In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

![Alt text](https://30dayjavascript.js.org/images/comparison_operators.png)

As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following link has an exhaustive list of comparison of data types.



### Logical Operators 
The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

### Increment Operator
In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

#### Pre-Increment 
```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```


#### Post-Increment 
```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

```
* Same with decrement 


### Ternary Operators
Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
```

[extra learning](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### Windows Methods 
#### Window alert() method
alert(message)

Window prompt() method 
The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

```js
prompt('required text', 'optional text')

```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)

```
### Date Object 
Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

![Alt text](https://30dayjavascript.js.org/images/date_time_object.png)

#### Creating a time object
Once we create time object. The time object will provide information about time. Let us create a time object

```js
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

