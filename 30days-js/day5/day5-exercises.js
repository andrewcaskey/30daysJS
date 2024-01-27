//  Exercise: Level 1


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// 1. Declare an empty array;
const emptyArray = [];
console.log(emptyArray);

// 2. Declare an array with more than 5 number of elements
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0]);
console.log(numbers[5]);
console.log(numbers[9]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'two', true, null, undefined, {name: 'John'}];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
//...   

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Google';
if (itCompanies.includes(company)) {
  console.log(company);
}
else {
  console.log('Company not found');
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes('oo')) {
    console.log(itCompanies[i]);
  }
}

// ### Exercise: Level 2

//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//2. First remove all the functions and change the string to array and count the number of words in the array
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words.length);

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
shoppingCart.pop();
console.log(shoppingCart);
// modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
}
else {
  countries.push('Ethiopia');
}
console.log(countries);

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
}
else {
  webTechs.push('Sass');
}
console.log(webTechs);

//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ### Exercise: Level 3

//1. The following is an array of 10 students ages:
const ages = [19,22,19,24,20,25,26,24,25,24]
// Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(ages[0]);
console.log(ages[9]);
// Find the median age(one middle item or two middle items divided by two)
console.log(ages[4]);
// Find the average age(all items divided by number of items)
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum / ages.length);
// Find the range of the ages(max minus min)
console.log(ages[9] - ages[0]);
// Compare the value of (min - average) and (max - average), use abs() method 1
console.log(Math.abs(ages[0] - (sum / ages.length)));
console.log(Math.abs(ages[9] - (sum / ages.length)));
// Find the middle country(ies) in the countries array
console.log(countries[5]);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf = [];
let secondHalf = [];
for (let i = 0; i < countries.length; i++) {
  if (i < countries.length / 2) {
    firstHalf.push(countries[i]);
  }
  else {
    secondHalf.push(countries[i]);
  }
}
console.log(firstHalf);
console.log(secondHalf);


