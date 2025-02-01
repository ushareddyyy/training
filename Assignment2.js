
//if else ladder

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  } 
//Switch case
for (let i = 1; i <= 100; i++) {
    let output = '';

    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            output = "FizzBuzz";
            break;
        case (i % 3 === 0):
            output = "Fizz";
            break;
        case (i % 5 === 0):
            output = "Buzz";
            break;
        default:
            output = i;
    }

    console.log(output);
} 
// Assignment - 2

let a = Number(prompt("Enter the 1st number"));
let b = Number(prompt("Enter the 2nd number"));
let c = Number(prompt("Enter the 3rd number"));

console.log(a);
console.log(b);
console.log(c);

// If Else Statement
if (a > b && a > c) {
    console.log("The greater number is " + a);
} else if (b > a && b > c) {
    console.log("The greater number is " + b);
} else if (c > a && c > b) {
    console.log("The greater number is " + c);
} else {
    console.log("Some numbers are equal.");
} 

    let ab = Number(prompt("Enter the 1st number"));
    let bb = Number(prompt("Enter the 2nd number"));
    let cb = Number(prompt("Enter the 3rd number"));
    
    console.log(ab);
    console.log(bb);
    console.log(cb);
    switch (true) {
        case (ab > bb && ab> cb):
            console.log("The greater number is " + ab);
            break;
        case (bb > ab && bb > cb):
            console.log("The greater number is " + bb);
            break;
        case (cb > ab && cb > bb):
            console.log("The greater number is " + cb);
            break;
        default:
            console.log("Some numbers are equal.");
            break;
    }