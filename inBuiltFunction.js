// Type of Function : 
// 1. In-Built Function / Pre-defined Function 
// 2. User-defined Function 



// 1. In-Built Function / Pre-defined Function 
// Basic Function :

// 1) prompt Function :   return always String 
// if you want user input.
// var fname = prompt("Enter Your Name : ");
// console.log(fname,typeof fname);
// var age = prompt("Enter your Age : ");
// console.log(age,typeof age);


// how to Convert String in to a Number :
// // 1) using + Operator
// var age = +prompt("Enter your Age : ");
// console.log(age,typeof age);
// // 2) using Number()
// var age = Number(prompt("Enter your Age : "));
// console.log(age,typeof age);

// Empty  cancel :
// var fname = prompt("Enter Your Name : ");  cancel   : null 'object'
// var fname = +prompt("Enter Your Name : ");  cancel   : 0 'number'

// Empty ok :
// var fname = prompt("Enter Your Name : ");  ok   : '' 'string'
// var fname = +prompt("Enter Your Name : ");  ok   : 0 'number'


// console.log(fname,typeof fname);  

///////////////////////////////////////////////////////////
// 2) alert Function :  show pop's massage 
// no return   : undefined

// var ans = alert("Hello All");
// console.log(ans);

//////////////////////////////////////
// var fname = prompt("Enter Your Name : ");
// alert(`Hello ${fname}`);

////////////////////////////////////////////////
// 3) confirm Function : 
// confirmation : 
// var ans = confirm("Age you sure ? ");
// console.log(ans);






/*
1) 
Age Verification: Create a program that asks the user for their age using prompt. If the user is 18 or older, display a confirmation message using alert; otherwise, display a message that access is denied.

2) 
To-Do List: Prompt the user to enter tasks for a to-do list. Use confirm to ask if they are finished after each task, and when they are done, display the full list using alert.

3) 
Favorite Movie Survey: Ask the user to input their favorite movie using prompt, then confirm if their input is correct using confirm. If confirmed, display a message using alert.

*/