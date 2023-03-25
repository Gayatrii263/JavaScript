// Control Structures
// -It is used to take some decisions based on conditions.
// - we can execute/run our code conditionally.
// - It provides decision making abilities to our code/Program.

// 1. if - if the condition is true, we will execute a block of code.

// syntax - 
// if (codition){
    // statements;
// }

// let age = 21;

// if (age >= 21) {
    
//     console.log("You Are Eligible For UPSC Exam.");
// }

// --------------------------------------------------------------------------------------

// 2. if eles-
// - if condition is true , we will execute (if) block of code... eles we'll execute another block.
// - only one block of code can be executed at a time.

// // syntax - 
// // if (codition){
//     // statements;
//  } eles (condition){statement;}

// let age = 20;

// if (age >= 21) {
    
//     console.log("You Are Eligible For UPSC Exam.");
// } else{
//     console.log("You Are Not Eligible For UPSC Exam");
// }

// --------------------------------------------------------------------------------------

// 3. nested if -


// // syntax - 
// // if (codition) {
//   if (condition) { 
// statements;
//  } 

// let age = 21;

// if(age >= 21); {
//     if(age <= 32){
//         console.log("You Are Eligible For UPSC Exam.")
//     } else{
//         console.log("Your Age Limit Is 32.");
//     }
// }

// --------------------------------------------------------------------------------------

// 4. if eles if -

// // syntax - 
// // if (codition) {
    // statement
//  else if (condition) { 
// statements;
//  } 


// let age = 20

// if (age >= 21) {
//     console.log("You Are Eligible For UPSC Exam.");
// } else if  (age >= 19) {
//     console.log("Try After Few Years.")
// } else {
//     console.log("Your Age Is Not Valid.")
// }

// --------------------------------------------------------------------------------------

// 5. For Loop -

// syntax - 

// for ( intialization; condition; incr/decre) {
//     statement
// }

// for ( let i = 1; i <= 10; i++){
//     console.log(i);
// }

// --------------------------------------------------------------------------------------

// 6. while Loop -

// syntax - 

// let i = initialValue;

// while ( condition; {
//     statement
// }

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// --------------------------------------------------------------------------------------

// 7.do while Loop -

// syntax - 

// let i = initialValue;

// do {
//     statement;
//     i++;
// } whilw(condition);

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// --------------------------------------------------------------------------------------

// 8. switch case -

// Example - "EDUCATION"
// case 1 = GRADUATE
// case 2 = POST GRADUATE
// case 3 = PHD
// case 4 = HSC
// case 5 = SSC
// default = always execute if there is no match - other

// syntax -

// switch(choice){
//     case choice 1;
//     statement;
//     break;
//     case choice 2;
//     statement;
//     break;
//     case choice 3;
//     statement;
//     break;
//     case choice 4;
//     statement;
//     break;
//     case choice 5;
//     statement;
//     break;
// }

let choice = prompt(`Enter Your Education

1.  GRADUATE
2.  POST GRADUATE
3.  PHD
4.  HSC
5.  SSC

`);

switch(+choice){
    case 1:
        console.log("GRADUATE")
        break;
    case 2 :
        console.log("POST GRADUATE")
        break;
    case 3:
        console.log("PHD")
        break;
    case 4 :
        console.log("HSC")
        break;
    case 5 :
        console.log("SSC")
        break;
    default:{
        console.log("Other")
    }
}