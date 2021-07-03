//check the number is positive or negative
// const number = parseInt(prompt("enter the number"));
//check if the number is grater than 0
/*if (number > 0) {
    console.log("no is positive");

}
else if (number == 0) {
    console.log("no is zero");


}
else {
    console.log("no is negative");
}
*/
//check the number is odd or even
//using if else statement

/*const number= prompt("enter the number");

if (number%2==0) {
    console.log("the number is even");
    
}
else{
    console.log("otherwise the no is odd");
}*/


//suing ternary opreater
/*
const number = prompt("enter the number");
const results = (number % 2 == 0)? "even":"odd";
console.log(`the number is ${results}`);*/

//find the largest number among 3

/*const number1 = prompt("enter the number1");
const number2 = prompt("enter the number2");
const number3 = prompt("enter the number3");
let largest;
if (number1 >= number2 && number1 >= number3) {
    largest = number1;

}
else if (number2 >= number1 && number2 >= number3) {
    largest = number2;
}

else {
  largest=number3;
}
console.log("the largest number is" +largest);*/

//by math.max
/*const num1= parseFloat(prompt("enter the first number"));
const num2= parseFloat(prompt("enter the first number"));
const num3= parseFloat(prompt("enter the first number"));
const largest = Math.max(num1,num2,num3);
console.log("the largest umber is"+largest);*/


//check the number is prime number in interval
/*const lowerNumber = parseInt(prompt("enter the lower number"));
const higherNumber = parseInt(prompt("enter the higher number"));
console.log(`the prime number is bw ${lowerNumber} and ${higherNumber} are`);
//looping from lower number to higher number

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    //looping through to 2 useer input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
            console.log(i);
    }

}*/