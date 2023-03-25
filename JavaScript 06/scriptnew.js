// class examinationForm{
//     constructor(givenname, rollno, address, email){
//         console.log("CALLED..." + " " + givenname + " " + rollno + " " + address  + " " + email)
//         this.name = givenname
//         this.rollno = rollno
//         this.address = address
//         this.email = email

//     }
//     preview(){
//         alert(this.name + " : Your form is for roll number : " + this.rollno + " and address is " + this.address + " Email is " + this.email)
//     }
//     submit(){
//      alert(this.name + " : Form submitted with roll number : " + this.rollno)
//     }
//     cancle(){
//      alert(this.name + " : This form is cancelled with roll number : " + this.rollno)
//      this.rollno = 0
//     }
   

//  }

//  let gayatriForm = new examinationForm(" Gayatri, ", 101 , " Sadashiv Peth,Pune, " , " gayatrijadhav7640@gmail.com ")
// gayatriForm.preview()
// gayatriForm.submit()
// gayatriForm.cancle()
// gayatriForm.preview()

// -------------------------------------------------------------------------------------------

// Rest And Spread Operator - ... common feature

// Rest Operator = list of item converted into array, last form of parameter

// function sum(a,b,...restExam){
//     console.log(restExam);
// }
// sum(1,2,3,4,5,6,7,8,9);

// // Spread Operator = conver array into list of items

// Math.min(1,2,3); //1

// let spread = [1,2,3];

// console.log(Math.min(...spread));

// -------------------------------------------------------------------------------------------

// setTimeout and setInterval

// 1. setTimeout = timerID =setTimeout(function,<delay>)

// document.write("Hello");

// let a = setTimeout(function(){
//     alert("SetTimeout")
// }, 2000)

// let b = promt(" Do you want to run this setTimeout?(y/n)");
// if("n" == b){
//     clearTimeout(a)
//    }
// // clearTimeout(a)
// console.log(a);// 1 is timer ID

// -------------------------------------------------------------------------------------------

// setTimeout(() =>{
//     console.log("Hello");
// }, 1000)
// console.log("Start")

// -------------------------------------------------------------------------------------------
// const mult = (a, b, c) => {
//     console.log(" after 10 seconds " + (a * b * c))
//     a * b
//     }
//     setTimeout(mult, 1000, 1, 2, 7)
//     setInterval(function() {
//     alert("setinterval")
//     }, 10000)

// -------------------------------------------------------------------------------------------

// 2. setInterval

// setInterval(() =>{
//     console.log("Hello");
//     console.log("World");
// }, 1000)
// console.log("Start")

//  -------------------------------------------------------------------------------------------

  