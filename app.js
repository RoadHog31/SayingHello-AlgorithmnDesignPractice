// The “Hello, World” program is the first program you learn
// to write in many languages, but it doesn’t involve any input.
// So create a program that prompts for your name and prints
// a greeting using your name.
//
// Example Output
// What is your name? Brian
// Hello, Brian, nice to meet you!
//
// Constraint
// • Keep the input, string concatenation, and output separate.

//npm install prompt-sync
const prompt = require('prompt-sync')();

inputName(prompt(`Hello what is your name?` + ` `));


function inputName(inputName) {

    if(inputName != null) {
    
    console.log(`Hello, ${inputName}, nice to meet you!`);
    }    
     
};