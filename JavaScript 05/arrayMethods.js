// Array.js - Push, Pop, Unshift, Shift, splice, slice, concat, fill, tostring, join, sort, 
// reverse, includes,indexof
// Static ARRAY methods - array from, array of, array is array
// ArrayMethod - // Collection of multiple data elements/values

// arrayname.methodname[]; 
// array.from[]; - static array methods

// ----------------------------------------------------------

// Basic Operations [Adding & Removing] =>

//a. Push Method

// Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.push("Extrovert");

// console.log(strengths);

// // Example 2 -

// let age = ['1','2','3','4','5','6','7','8','9'];

// age.push('10');

// console.log(age);

// // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.push("Sky Blue");

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.push("Canvas");

// console.log(artTools);

// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.push("FerreroRocher");

// console.log(chocolates);

// -------------------------------------------------------------------------------

//b. Pop Method

// Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.pop();

// console.log(strengths);

// // Example 2 -

// let age = ['1','2','3','4','5','6','7','8','9'];

// age.pop();

// console.log(age);

// // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.pop();

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.pop();

// console.log(artTools);

// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.pop();

// console.log(chocolates);

// -------------------------------------------------------------------------------

//c. unshift Method

// Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.unshift("Extrovert");

// console.log(strengths);

// // Example 2 -

// let age = ['1','2','3','4','5','6','7','8','9'];

// age.unshift('10');

// console.log(age);

// // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.unshift("Skyblue");

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.unshift("Canvas");

// console.log(artTools);

// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.unshift("Ferrero Rocher");

// console.log(chocolates);

// -------------------------------------------------------------------------------

// //d. Shift Method

// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.shift();

// console.log(strengths);

// // Example 2 -

// let age = ['1','2','3','4','5','6','7','8','9'];

// age.shift();

// console.log(age);

// // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.shift();

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.shift();

// console.log(artTools);

// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.shift();

// console.log(chocolates);

// -------------------------------------------------------------------------------

// //e. Splice Method - add,update,delete/position to add elememt, no. of elements to delete,
 // actual element to be added

// // Example 1 - 

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.splice(1,0,"Extrovert");

// console.log(strengths);

// // // Example 2 -

// let age = ['1','2','3','4','5','6','7','8','9'];

// age.splice(3,9, "10");

// console.log(age);

// // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.splice(1,2,"Sky Blue");

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.splice(0,1, "Canvas");

// console.log(artTools);

// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.splice(1,1, "Ferrero Rocher");

// console.log(chocolates);

// -------------------------------------------------------------------------------


// //f. Slice Method - Used to copy entire or partial aaray

// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// let strengthsCopy = strengths.slice(-2);

// console.log(strengths);
// console.log(strengthsCopy);

// // // Example 2 -

// const age = ['1','2','3','4','5','6','7','8','9'];

// const age2 = age.slice(1,9);

// console.log(age);
// console.log(age2);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// let colors2 = colors.slice(-1);

// console.log(colors);
// console.log(colors2);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// let artTools2 = artTools.slice(1,4);

// console.log(artTools);
// console.log(artTools2);

// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// let chocolates2 = chocolates.slice(1,3,2);

// console.log(chocolates);
// console.log(chocolates2);

// -------------------------------------------------------------------------------


// //g. concat Method - we can combine arrays 
// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// let moreStrengths = ["Extrovert"];

// let allStrengths = strengths.concat(moreStrengths);

// console.log(allStrengths);

// // // Example 2 -

// const age = ['1','2','3','4','5','6','7','8','9'];

// const moreages = ['10','11'];

// let allAges = age.concat(moreages);

// console.log(allAges);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// let morecolors = ["Skyblue","White"];

// let allColors = colors.concat(morecolors);

// console.log(allColors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// let moreartTools = ["Canvas"];

// let allArttools = artTools.concat(moreartTools);

// console.log(allArttools);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// let moreChocolates = ["Ferrero Rocher"];

// let allChocolates = chocolates.concat(moreChocolates);

// console.log(allChocolates);

// -------------------------------------------------------------------------------

// //h. fill Method - Used to fill entire array with given element with static value.
// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.fill("Extrovert");

// console.log(strengths);

// // // Example 2 -

// const age = ['1','2','3','4','5','6','7','8','9'];

// age.fill(24);

// console.log(age);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.fill("Sky Blue");

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.fill("Canvas");

// console.log(artTools);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.fill("Ferrero Rocher");

// console.log(chocolates);

// -------------------------------------------------------------------------------

// //i. tostring - from array to comma seperated string

// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.toString();

// console.log(strengths);

// // // Example 2 -

// const age = ['1','2','3','4','5','6','7','8','9'];

// age.toString();

// console.log(age);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.toString();

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.toString();

// console.log(artTools);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.toString();

// console.log(chocolates);

// -------------------------------------------------------------------------------

// //j. join - from array to string seperated with given characters
// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.join(" ");

// console.log(strengths);

// // // Example 2 -

// const age = ['1','2','3','4','5','6','7','8','9'];

// age.join(" ");

// console.log(age);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.join(" ");

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.join(" ");

// console.log(artTools);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.join(" ");

// console.log(chocolates);

// -------------------------------------------------------------------------------

// //k. sort() - used to sort ascending order.
// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// strengths.sort();

// console.log(strengths);

// // // Example 2 - assuming string/wrong result/swap

// const age = ['21','2','3','4','5','6','7','8','9'];

// age.sort((a,b) => a-b);

// console.log(age);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// colors.sort();

// console.log(colors);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// artTools.sort();

// console.log(artTools);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// chocolates.sort();

// console.log(chocolates);

// -------------------------------------------------------------------------------

// l. reverse() - used to reverse array elements.

let strengths = ["Passionate","Creative","Artistic"];

let ascendingStrenghts = strengths.sort();

let descendingStrenghts = strengths.reverse();

console.log(strengths);

// // Example 2 - assuming string/wrong result/swap

const age = ['2','3','4','5','45','6','7','8','9','12'];

const ascendingAge = age.sort();

const descendingAge = age.reverse();

age.sort((a,b) => b-a);

console.log(age);

// // Example 3 -

let colors = ["Red","Blue","Green","Yellow","Purple"];

let ascendingColors = colors.sort();

let descendingColors = colors.reverse();

console.log(colors);

// Example 4 -

let artTool = ["OilColors","Pastels","WaterColors","AcrylicColors","Charcoal"];

let ascendingArttools = artTool.sort();

let descendingArttools = artTool.reverse();

console.log(artTool);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// let ascendingChocolates = chocolates.sort();

// let descendingChocolates = chocolates.reverse();


// console.log(chocolates);

// -------------------------------------------------------------------------------

// //m. includes() - returns true if given element exists in the array otherwise returns false

// // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// let strengthPassionateisAvailable = strengths.includes("Passionate");

// console.log(strengthPassionateisAvailable);

// // // Example 2 - assuming string/wrong result/swap

// const age = ['21','2','3','4','5','6','7','8','9'];

// let age22isAvailable = age.includes("22");

// console.log(age22isAvailable);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// let colorRedisAvailable = colors.includes("Red");

// console.log(colorRedisAvailable);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// let artToolCanvasisAvailable = artTools.includes("Canvas");

// console.log(artToolCanvasisAvailable);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// let chocolatePerkisAvailable = chocolates.includes("Perk");

// console.log(chocolatePerkisAvailable);

// // -------------------------------------------------------------------------------

// // //n. indexOf() - returns index no of the given element(if exists)/if not then -1

// // // Example 1 -

// let strengths = ["Passionate","Creative","Artistic"];

// let creativeindex = strengths.indexOf("Creative");

// console.log(creativeindex);

// // // Example 2 - assuming string/wrong result/swap

// const age = ['21','2','3','4','5','6','7','8','9'];

// let indexno = age.indexOf("9");

// console.log(indexno);

// // // Example 3 -

// let colors = ["Red","Blue","Green","Yellow","Purple"];

// let colorRedisAvailable = colors.indexOf("Red");

// console.log(colorRedisAvailable);

// // Example 4 -

// let artTools = ["oilColors","Pastels","waterColors","acrylicColors","Charcoal"];

// let artToolCanvasisAvailable = artTools.indexOf("Canvas");

// console.log(artToolCanvasisAvailable);


// // Example 5 -

// let chocolates = ["Dairymilk","Kitcat","5Star","Perk"];

// let chocolatePerkisAvailable = chocolates.indexOf("Perk");

// console.log(chocolatePerkisAvailable);

// -------------------------------------------------------------------------------

// Static Array Methods - Array.methodName();/Array.from();/Array.of();/Array.isArray();

// 1. Array.from(); converts any valid string or object into an array.

// const fruit = Array.from("Strawberry");

// console.log(fruit);

// // 2. Array.of(); converts any number of comma seperated elements into an array.

// const laptop = Array.of("Apple","HP");

// console.log(laptop);

// 3. Array.isArray(); converts any number of comma seperated elements into an array.

// const shoes = Array.isArray("Puma","Addidas");

// console.log(shoes);//False

// const shoe = Array.isArray(["Puma","Addidas"]);

// console.log(shoe);//true


