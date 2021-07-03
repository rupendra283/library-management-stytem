const number = parseInt(prompt("enter the positive number"));
//checking number is negative
if (number < 0) {
    console.log("Error! negative is not exist in factorial");


}
else if (number === 0) {
    console.log(`the factorial of ${number} is 1`);
}
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    // console.log(`the factorial of number is ${number} is ${fact}`);
    console.log(fact);
}