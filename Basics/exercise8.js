/**
 * Write a JavaScript program where the program takes a random integer between 1 to 10, 
 * the user is then prompted to input a guess number. If the user input matches with guess number, 
 * the program will display a message "Good Work" otherwise display a message "Not matched".
 */
// your solution

let userInput = 10, num;
while(userInput!=num){
    num = Math.ceil(Math.random()*10);
    if(userInput === num){
        console.log("Good Work");
    }else{
        console.log("Not matched!")
    }
}


