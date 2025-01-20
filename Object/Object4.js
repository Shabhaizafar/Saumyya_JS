// 1. List Object Properties : 

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };

// How to Access Keys of Properties : >> For in Loop

// for (const key in student) {
//     console.log(key);
// }
// -----------------------------------------------
// 2. Delete Property

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };
// console.log(student);


//How to Delete Property >> delete 
// 1. 
// delete student.rollno;
// console.log(student);
// 2.
// delete student['rollno'];
// console.log(student);
// -----------------------------------------------
// 3. Object Length

// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12,
//     gender : "Male"
// };

// How to Find the Length of Object : >>> for in Loop
// var len = 0;
// for (const key in student) {
//     len++;
// }
// console.log("Length of given Object : ",len);
// ------------------------------------------------
// 4. Display Reading Status

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// for (const element of library) {
//     console.log(element.title,":",element.readingStatus);
// }