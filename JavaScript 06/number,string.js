// JS Dates And dates method 
// Date Objects
// Get Methods

// d.getFullYear(); 1999 (yyyy)
// d.getMonth(); (0-11)
// d.getDate(); (1-31)
// d.getHours(); (0-23)
// d.getMinutes(); (0-59)
// d.getSeconds(); (0-59)
// d.getMiliseconds(); (0-999)
// d.getTime(); (Miliseconds since jan 1, 1970)
// d.getDay(); (0-6)


setInterval(() => {
    let d = new Date();
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} `); 
}, 1000);


// ----------------------------------------------------------------------------------------

// Number Function/Methods

let number = 263.44;

console.log(number);
console.log(number.toString()); //number into string
console.log(number.toPrecision(9));// lenght 263.444444
console.log(Number(number));//263.44
console.log(parseInt(number));//263
console.log(parseFloat(number));//263.44

let num = "GAYATRI";

console.log(Number(num));//Nan
console.log(isNaN(num));//true

// ----------------------------------------------------------------------------------------

// Math Functions

// 1.Math.abs(); = absolute number - removes negavtive signs
console.log(Math.abs(-26));//26

// 2.Math.ceil(); = Next integer number
console.log(Math.ceil(26.9));//27

// 3.Math.floor(); = Removes floating point 
console.log(Math.floor(26.9));//26

// 4.Math.log(); = Log
console.log(Math.log(26.9));//3.292126286607793

// 5.Math.min(); = returns minimum number
console.log(Math.min(21,22,23,24));21

// 6.Math.max(); = returns maximum number
console.log(Math.max(21,22,23,24));24

// 7.Math.pow(); = power od digit
console.log(Math.pow(9,8));43046721

// 7.Math.random(); = 0-1 random no.
console.log(Math.random() * 2);

// ----------------------------------------------------------------------------------------

// String Methods

// 1.length - find length of string
var str = "I Love Chocolates";
console.log(str.length);//17

// 2.trim - remove spacing
var str = "    I Love Chocolates";
console.log(str.trim());//I Love Chocolates

// 3.includes - check if string containes substring
var str = "I Love Chocolates";
var str2 = "Love";
var str3 = "You";
console.log(str.includes(str2));//true
console.log(str.includes(str3));//false

// 4.indexof() - index of substring
var str = "I Love Chocolates";
console.log(str.indexOf("I"));//0
console.log(str.indexOf("You"));//-1

// 5.toUpperCase() - Capital
var str = "I Love Chocolates";
console.log(str.toUpperCase());//I LOVE CHOCOLATES

// 6.toLowerCase() - Small
var str = "I LOVE CHOCOLATES";
console.log(str.toLowerCase());//i love chocolates

// 7.replace() - Replace string with another values
var str = "I Love Chocolates";
console.log(str.replace("Chocolates" , "Coding"));//i love Coding

// 8.slice() - return section of string
var str = "I Love Chocolates";
console.log(str.slice(1));//love chocolates

// 9.split() - covert into array
var str = "I Love Chocolates";
console.log(str.split(" "));//['I Love Chocolates']

// 10.repeat() - covert into array
var str = "I Love Chocolates";
console.log(str.repeat(2));//I Love Chocolates I Love Chocolates

// 11.Match() - returns array of matching string
var str = "I Love Chocolates";
console.log(str.match("Chocolates"));//['Chocolates', index: 7, input: 'I Love Chocolates', groups: undefined]

// 12.CharAt() - returns character at an index
var str = "I Love Chocolates";
console.log(str.charAt(2));//L

// 13.CharCodeAt() - returns an unicode at an index
var str = "I Love Chocolates";
console.log(str.charCodeAt(2));//76

// 14.concat() - concat aad 2 strings
var str = "I Love Chocolates ";
var str2 = "Coding"
console.log(str.concat(str2));//I Love Chocolates Coding

// 15.search() - find the string
var str = "I Love Chocolates ";
console.log(str.search("Coding"));//-1

// 16.substring() - extract character
var str = "I Love Chocolates ";
console.log(str.substring(2,5));//lov

// 17.substr() - extract word
var str = "I Love Chocolates ";
console.log(str.substr(2,5));//love

// 18.startswith() - check if string starts with
var str = "I Love Chocolates ";
console.log(str.startsWith("Love"));//false

// 19.endswith() - check if string ends with
var str = "I Love Chocolates";
console.log(str.endsWith("Chocolates"));//true

// 20.lastindecof() - count letters
var str = "I Love Chocolates";
console.log(str.lastIndexOf("Chocolates"));//7







