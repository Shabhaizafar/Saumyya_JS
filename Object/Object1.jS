// - Intro to objects.

// Array :
// Array is Collection of Multiple Data with different or same datatype.

// Object : 
// Object is collection of Multiple Properties or Methods.
// Property :  it's pair of key and value
// Methods : function 

// Syntax : 
/*
declaration type  objectname = {
    key1 : value1,
    key2 : key2
}
*/


// How to Create an Empty Object : 
// const obj1 = {};
// console.log(obj1);
// console.log(typeof obj1);


// 
const obj1 = {
    // key   +   value      =  property
    firstname : "Raj",
    lastname : "Shah",
    Age : 12
};

// How to Access Full Object : 
console.log(obj1);
// console.log(typeof obj1);



// How to Access Property Value : 
// 1) Using Dot Notation : 
// console.log(obj1.firstname);

// 2) Using Bracket Notation : 
// console.log(obj1["lastname"]);




// How to Change/Modify Property Value : 
// 1) Using Dot Notation :
// obj1.firstname = "Ajay";

// 2) Using Bracket Notation : 
// obj1['Age'] = 20;




// How to Add new Property : 
// 1) Using Dot Notation :
// obj1.Gender = "Male";
// 2) Using Bracket Notation : 
// obj1["Address"] = "GNR";

// How to remove Property :
// 1) Using Dot Notation :
delete obj1.firstname;
// 2) Using Bracket Notation : 
delete obj1["lastname"];


console.log(obj1);



// Aminal : 