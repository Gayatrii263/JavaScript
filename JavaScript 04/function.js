// function :

// Syntax

// let a = 10;
// var b = 20;
// const c = 30;

// function functionName (para){
//     // statements
//     console.log("Hello");
// }

// console.log(26+26);

// function add( ){
//  console.log(26+27);   
// }
// add();

// console.log(26+28);

// let num1 = 20;
// let num2 = 20;

// console.log("Addition is :" + (num1 + num2))


// let num1 = +prompt("Enter First No.");
// let num2 = +prompt("Enter Second No.");

// console.log("Addition is :" + (num1 + num2));

// --------------------------------------------------------------------------------------------

// typeConversion :

// true : 1;
// false : 0;

// let isRed = true;

// console.log (Number(isRed)); // boolean
// String(412); // "412"
// Boolean(false);// 0
// Number("Hello"); // Nan
// Number("12345"); //12345

// int(2) float(2.3)

// console.log(parseInt("6.8"));
// console.log("1");

// console.log(parseFloat("4.123"));

// console.log(Number("3jhjh")); //Nan
// console.log(parseInt("3jhjh")); // 3

// --------------------------------------------------------------------------------------------

// typeCoresion :
// let name = "Hello";

// name = 10;

// console.log(typeof name);

// --------------------------------------------------------------------------------------------

// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Second Number");

// console.log("Addition is :" + (num1 + num2));

// let num3 = +prompt("Enter First Number");
// let num4 = +prompt("Enter Second Number");

// console.log("Addition is :" + (num3 + num4));

// let num5 = +prompt("Enter First Number");
// let num6 = +prompt("Enter Second Number");

// console.log("Addition is :" + (num5 + num6));

// --------------------------------------------------------------------------------------------

// function add(){
//     let num1 = +prompt("Enter First Number");
//     let num2 = +prompt("Enter First Number");
//     console.log("Addition is :" + (num1 + num2));
// }
// add()
// add()

// --------------------------------------------------------------------------------------------

// function declaration/regular function/normal function

// function add(num1,num2){
//     // console.log(10+20);
//     console.log(num1+num2);
//     console.log(num1-num2);
//     console.log(num1/num2);
//     console.log(num1*num2);
// }
// add(20,40);
// add(30,90);

// --------------------------------------------------------------------------------------------

// function printMsg (name){
//     console.log(`Hey ${name}, Welcome to the world of Coding.`)
// }
// printMsg("Gayatri");
// printMsg("Manaswi");
// printMsg("Vaidehi");
// printMsg("Purva");
// printMsg("Saumya");

// --------------------------------------------------------------------------------------------

// returnFunction

// function add(num1, num2) {
// // console.log(3+2);
// // console.log(num1+num2)

// let result = num1 / num2;
// // console.log(result);
// return result;
// // console.log(result); // Not Acessable after return
// }
// // console.log(result); // Valid 

// add(90,10);
// console.log(add(20,20));
// console.log(add(20,30));
// console.log(add(20,40));
// console.log(add(20,50));
// console.log(add(20,60));
// console.log(add(20,70));

// --------------------------------------------------------------------------------------------

// function declaration/regular function/normal function
// function expression => (function assigned to a variable)

// function expression

// let msg = function (){
//     console.log("Hey")
// }
// msg();

// 1.Arrow Function

// syntax

// let arrowFunction = () => {
//     // statement
//     console.log("Hello");
// };

// arrowFunction();

// const add = (num1,num2) =>{
    
//     console.log(num1 + num2);
    
//     return(num1+num2);
// }
// add(20,20);


// const add = (num1, num2) => num1 + num2;

// let addition = add(10, 20);

// console.log(addition);

// const multiply = (num1) => num1*2;

// let addition = multiply(10);

// console.log(addition);


// 2. Annonymous Function

// let add = function(){
//     // statement
// }


// 3. IIFE (Immediately involked function expression)

// ((name) => {
//     let course = "MERN";
//     console.log("Hello : " + name + " | "+ course)
// })  ("Gayatri");