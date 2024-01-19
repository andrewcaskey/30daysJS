//Check if type of '10' is equal to 10
let isEqual = typeof '10' === typeof 10;
console.log(isEqual);

//Check if parseInt('9.8') is equal to 10
let isIntEqual = parseInt('9.8') === 10;
console.log(isIntEqual);

// Boolean value is either true or false.
let isTrue = true;
let isFalse = false;
console.log(isTrue);  // Outputs: true
console.log(isFalse); // Outputs: false

//Write three JavaScript statement which provide truthy value.
let truthy1 = 1
let truthy2 = "good"
let truthy3 = {};

console.log(Boolean(truthy1));
console.log(Boolean(truthy2));
console.log(Boolean(truthy3));

//Find the length of python and jargon and make a falsy comparison statement.
let pythonLength = 'python'.length;
let jargonLength = 'jargon'.length;

let isLengthEqual = pythonLength != jargonLength;
console.log(isLengthEqual);

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);



//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius of the circle")
let PI = 3.14
let area2 = PI * radius * radius
console.log("The area of the circle is " + area2)

