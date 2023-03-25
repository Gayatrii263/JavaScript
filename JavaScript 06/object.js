// In object oriented programming , a class is an extensible program-code tempate for creating
// objects, providng initial values for state (member variables) and implimentation of behaviour
// (member functions)

// Syntax for class

// class myclass{
//     // classMethods
//     constructor(){...}
//     method1(){...}
//     method2(){...}
// }

// class examinationForm{
//    submit(){
//     alert(this.name + " : Form submitted with roll number : " + this.rollno)
//    }
//    cancle(){
//     alert(this.name + " : This form is cancelled with roll number : " + this.rollno)
//    }
//    fill(givenname, rollno){
//     this.name = givenname
//     this.rollno = rollno
//    }
// }

// let Kavya = new examinationForm()
// Kavya.fill("Kavya", 101);

// let Shruti1 = new examinationForm()
// let Shruti2 = new examinationForm()
// Shruti1.fill("Shruti", 102);
// Shruti2.fill("Shruti", 103);

// Kavya.submit();
// Shruti1.submit();
// Shruti2.submit();
// Shruti1.cancle();

// ------------------------------------------------------------------------------

// Constructor- constructor method is called automatically by new, so we can intilies the object
            //    there

// class examinationForm{
//     constructor(){
//         console.log("CALLED...")
//     }
//     submit(){
//      alert(this.name + " : Form submitted with roll number : " + this.rollno)
//     }
//     cancle(){
//      alert(this.name + " : This form is cancelled with roll number : " + this.rollno)
//     }
//     fill(givenname, rollno){
//      this.name = givenname
//      this.rollno = rollno
//     }
//  }
 
//  let Kavya = new examinationForm()
// //  Kavya.fill("Kavya", 101);
 
//  let Shruti1 = new examinationForm()
//  let Shruti2 = new examinationForm()
// //  Shruti1.fill("Shruti", 102);
// //  Shruti2.fill("Shruti", 103);
 
//  Kavya.submit();
//  Shruti1.submit();
//  Shruti2.submit();
//  Shruti1.cancle();

// ------------------------------------------------------------------------------

// Object
// const returnedCopy = Object.assign({}, sourceObjectName);

// we use square bracket in array/indexno
// let student1 = [88,78,68,58,48];
// let student2 = [88,78,68,58,48];
// let student3 = [88,78,68,58,48];

// we use curly brackets in object/key value pair/bracket notation/dot notation
// This use for any keyword/ dont support for arrow function

// let student1 = {
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

// student1.result()

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

// Call/Apply/Bind

// let name = {
//     firstName: "Abdul",
//     lastName: "Kalam",

// }
// let printFullname = function (birthyear){
//     console.log(this.firstName + " " + this.lastName + " , Birth Year : " + birthyear);
// }
// printFullname.call(name , "1931");

// let name2 = {
//     firstName: "Lokmanya",
//     lastName: "Tilak",
// }

// // FunctionBorrowing

// // Call Method  , ivolkes a function directly

// printFullname.call(name2, "1856")

// // Apply Method , We pass argument in a array lists 

// printFullname.apply(name2, ["1856"]); 

// // bind Method / we have to call in cnsole,does not ivoked this will ivoked later function, copy of method

// let printname = printFullname.bind(name2, "1856")
// console.log(printname);
// printname();

// -------------------------------------------------------------------------------------------



