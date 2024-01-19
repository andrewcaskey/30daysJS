//1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
challenge = '30 days of Javascript'

//2. Print the string on the browser console using __console.log()__
console.log(challenge)

//3. Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length)

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//6. Cut (slice) out the first word of the string using substr() or substring() method
let firstWord = challenge.substr(0, challenge.indexOf(' '));
console.log(firstWord);

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let phrase = challenge.substring(challenge.indexOf('days'));
console.log(phrase);

//8. Check if the string contains a word Script using includes() method
let hasScript = challenge.includes('Script');
console.log(hasScript);

//*9. Split the string into an array using split() method
let words = challenge.split(' ');
console.log(words);

//*10. Split the string 30 Days Of JavaScript at the space using split() method
let splitString = challenge.split(' ');
console.log(splitString);

//11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(', ');
console.log(companiesArray);


//12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let newChallenge = challenge.replace('JavaScript', 'Python');
console.log(newChallenge);

//13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let charAt15 = challenge.charAt(15);
console.log(charAt15);

//14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let charCodeOfJ = challenge.charCodeAt(challenge.indexOf('J'));
console.log(charCodeOfJ);

//15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let firstA = challenge.indexOf('a');
console.log(firstA);

//16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let lastA = challenge.lastIndexOf('a');
console.log(lastA);



