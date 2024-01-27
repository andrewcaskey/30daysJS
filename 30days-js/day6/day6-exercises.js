
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

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']



// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
    }

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
}
while (j <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
    }

let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

let j = 10;
do {
    console.log(j);
    j--;
}
while (j >= 0);

// 3. Iterate 0 to n using for loop
let n = 10;
for (let i = 0; i <= n; i++) {
    console.log(i);
    }
    
// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let n = 7;
for (let i = 0; i <= n; i++) {
    console.log('#'.repeat(i));
    }

// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
    }


// 6. Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i * i}     ${i * i * i}`);
    }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        console.log(i);
    }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
    else {
        sumOdd += i;
    }
}
console.log(sumEven);
console.log(sumOdd);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
    else {
        sumOdd += i;
    }
}
console.log([sumEven, sumOdd]);

// 13. Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumbers = [];

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}
console.log(randomNumbers);

// 15. Develop a small script which generate a six characters random id:
