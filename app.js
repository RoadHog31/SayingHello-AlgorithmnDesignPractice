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

    if (inputName != null) {
        
        //use to upper or lower methods for right match. 
        switch (inputName) {
            case "Stephen":
                console.log(`Hello, ${inputName}, nice to meet you!`);
                break;
            case "Kelly":
                console.log(`Hello, ${inputName}, how you do'in!`);
                break;
            case "Kurtis":
                console.log(`Hello, ${inputName}, great to see you!`);
                break;
            default:
                case "Kelly":
                console.log(`Hello, ${inputName}, fantastic to meet you!`);
                break;                
        }    
    
    }    
     
};