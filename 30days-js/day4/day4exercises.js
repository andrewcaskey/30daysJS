//1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter your age:")
// if (age >= 18) {
//     console.log("You are old enough to drive")
// } else {
//     console.log("You are left with " + (18 - age) + " years to drive.")
// }

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = 250
// let yourAge = prompt("Enter your age:")
// if (myAge > yourAge) {
//     console.log("I am " + (myAge - yourAge) + " years older than you.")
// } else {
//     console.log("You are " + (yourAge - myAge) + " years older than me.")
// }

//3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
let a = 4
let b = 3
if (a > b) {
    console.log("a is greater than b")
}
else {
    console.log("a is less than b")
}
//4 Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?
let number = 10
if (number % 2 == 0) {
    console.log("The number is even")
}
else {
    console.log("The number is odd")
}
//5 Write a code which can give grade to students according to theirs scores:
// 80-100, A
// 70-89, B 
// 60-69, C
// 50-59, D
// 0-49, F
let score = 80
if (score >= 80 && score <= 100) {
    console.log("A")
}
else if (score >= 70 && score <= 89) {
    console.log("B")
}
else if (score >= 60 && score <= 69) {
    console.log("C")
}
else if (score >= 50 && score <= 59) {
    console.log("D")
}
else {
    console.log("F")
}
