// Map/foreach/filter/reduce

// 1. Map

// let flowerNames = [
// "Sunflower",
// "Rose",
// "Marigold",
// "Lotus",
// "Jasmine",
// "Hibiscus",
// "Periwinkle",
// "Chamomile"
// ];
// console.log(flowerNames);

// // syntax
// // flowerNames.map({} => {
// //  statement
// // })

// let result = flowerNames.map((name,index)=>{

// console.log("Flower Name : " + name);
// console.log("Index Number : " + index);
// // console.log(array);
// });

// // flowerNames.map();

// console.log(result);

// ---------------------------------------------------------------

// 2. ForEach - define index number and value on one line/ return

// const number = [21,22,23,24,25,26,27,28,29,30];

// const updateNumber = number.forEach((num,b) =>{
//     console.log(num);
//     console.log(b);
// })

// console.log("-----------------------------------------------------")

// const numbers = [21,22,23,24,25,26,27,28,29,30];

// const updateNumbers = numbers.map((num) =>{
//     // console.log(num);
//     return num *2;
// })
// console.log(numbers);
// console.log(updateNumbers);

// ---------------------------------------------------------------

//3. Filter -price,brand,model
// const smartwatches = [{
    
//     brand:"Fire Boltt",
//     model:"Pheonix Pro",
//     price: 9999,
// },

// { 
//     brand:"Noise",
//     model:"Colorfit Ultra 2",
//     price: 8999 ,
// },

// { 
//     brand:"Boat",
//     model:"Flash",
//     price: 6990 ,
// },

// { 
//     brand:"Sens",
//     model:"Edyson",
//     price: 6999 ,
// },

// { 
//     brand:"Apple",
//     model:"Ultra",
//     price: 89900 ,
// },

// { 
//     brand:"pTron",
//     model:"Force",
//     price: 4899 ,
// },
// ]

// for Brand filter
// console.log(smartwatches);

// const AppleSmartwatch = smartwatches.filter((smartWatch) =>{

//     // console.log(smartWatch.brand);

//     if(smartWatch.brand == "Apple" || smartWatch.brand == "Boat"){
//         return true;
//     }
// });

// console.log(AppleSmartwatch);

// for price filter
// const SmartwatchPrice = smartwatches.filter((smartWatch) =>{
//     // console.log(smartWatch.price);
    
//     if(SmartwatchPrice => 10000) {
//         return true;
//     }
// })
// console.log(SmartwatchPrice);

// ---------------------------------------------------------------

// Reduce- addition of all numbers 

// let numbers = [2,4,6,8,10,12,14,16,18,20];

// const finalresult = numbers.reduce((total, numbers) => {
//     // console.log(total+numbers);
//     result = total / numbers;
//     return result;
// })
// console.log(finalresult);

// ---------------------------------------------------------------

// Object
// const returnedCopy = Object.assign({}, sourceObjectName);

// we use square bracket in array/indexno
// let student1 = [88,78,68,58,48];
// let student2 = [88,78,68,58,48];
// let student3 = [88,78,68,58,48];

// we use curly brackets in object/key value pair/bracket notation/dot notation
// This use for any keyword/ dont support for arrow function

// const student1 = {
//     English: 88,
//     Hindi: 78,
//     Marathi: 68,
//     Science: 58,
//     Math: 48,

//     // Method
//     result:() =>{
//         console.log("Total : " +
//         (student1.English + 
//          student1.Hindi + 
//          student1.Marathi + 
//          student1.Science + 
//          student1.Math) / 
//          5 + "%" 
//     );
// }, 

// student1.result();

// -----------------------------------------------------------------------

// this function
// const student2 = {
//     English: 88,
//     Hindi: 78,
//     Marathi: 68,
//     Science: 58,
//     Math: 48,

//     // Method
//     result : function (){
//         console.log("Total : " +
//         (this.English + 
//          this.Hindi + 
//          this.Marathi + 
//          this.Science + 
//          this.Math) / 
//          5 + "%" 
//     );
// },
// }; 

// student2.result();

// -----------------------------------------------------------------------

// console.log(this);
// console.log(student1["English"]);
// console.log(student1.Math);