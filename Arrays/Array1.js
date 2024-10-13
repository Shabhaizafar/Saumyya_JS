// - Intro to arrays.
// Array  is Collection of Data which same or Different Datatype.
// Type of Array : object


// How to Create an Empty Array ? 
// var myArr = [];  //Empty Array

// console.log(myArr);
// console.log(typeof myArr);

// console.log(Array.isArray(myArr));

// Number Array : 
// var Arr1 = [1,2,3,4,5,6];

// String Array :
// var Arr2 = ["Royal","Techno","Soft"];

// Boolean Array : 
// var Arr3 = [true,false];


// Mix Values : 
// var Arr4 = [1,2,3,"Royal","soft",true,12n];

// console.log(Arr1);
// console.log(Arr2);
// console.log(Arr3);
// console.log(Arr4);

// length   1 2 3    4      5      6   7 
// var Arr1 = [1,2,3,"Royal","soft",true,12n,"Zafar","NewOne"];
//index     0 1 2    3      4     5    6

// console.log(Arr1);
// How to Get length of Array : 
// console.log(Arr1.length);

// console.log(Arr1[6]);
// console.log(Arr1[Arr1.length-1]);

// var Arr1 = [11,12,13,14,"Raj","Shah"];
// var Arr1 = [];
// console.log(Arr1);
//Method : 
// - Push pop shift unshift.

// 1) push : add new element  at last index
// if length greater than 0 return  new length of Array else return 0.

//single value: 
// Arr1.push(1000);

//Multiple Values :
// var Ans = Arr1.push(100,200,300);
// console.log(Arr1);
// console.log(Ans);
// console.log(Arr1.length);

// 2) pop : remove specific single Value at last index
// if length greater than 0 return deleted/removed value else return undefinded. 
// var Ans = Arr1.pop();
// Arr1.pop();
// console.log(Arr1);
// console.log(Ans);


// 3) shift : remove specific single Value at starting index (0)
// if length greater than 0 return deleted/removed value else return undefinded. 
// var Ans = Arr1.shift("Shah");
// Arr1.shift();
// console.log(Arr1);
// console.log(Ans);


// 4) unshift : add new Element at starting Index (0)
// if length greater than 0 return  new length of Array else return 0.

//single Value
// Arr1.unshift(10);

// Multiple Value
// Arr1.unshift(100,200,300);
// var Ans = Arr1.unshift(100,200,300);
// console.log(Arr1);
// console.log(Ans);

// var Arr1 = [];

// var Ans = Arr1.push();
// console.log(Ans);



// Basic Array Operations
// Create an Array:

// Create an array of your favorite fruits and log it to the console.
// -------------------------------------------
// Access Elements:

// Given the array let colors = ["red", "green", "blue", "yellow"];, log the first and last elements.
// -------------------------------------------
// Add and Remove Elements:

// Add a new color to the end of the colors array.
// Remove the first element from the colors array.
// Add a new color to the beginning of the colors array.
// Remove the last element from the colors array.