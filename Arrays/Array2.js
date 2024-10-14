// - Primitive vs reference data types.

// Primitive : Number,String,Boolean
// var n1 = 12;
// var n2 = n1;
// console.log("Before : ");
// console.log("Value of N1 :",n1);
// console.log("Value of N2 :",n2);
// n1++;
// console.log("After :");
// console.log("Value of N1 :",n1);
// console.log("Value of N2 :",n2);


// reference : Object(Array,object)
// var Arr1 = [1,2,3];
// var Arr2 = Arr1;
// console.log("Before : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
// Arr1.push(100);
// console.log("After : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
/////////////////////////////////////////////////
// - Clone array & spread operator.

// copy
// var Arr1 = [1,2,3];
// var Arr2 = Arr1;
// console.log("Before : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
// Arr1.push(100);
// Arr2.unshift("Zafar")
// console.log("After : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);


//Clone : 
// 1) using concat(): 
// var Arr1 = [1,2,3];
// var Arr2 = Arr1.concat(1000,2000);
// console.log("Before : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
// Arr1.push(100);
// Arr2.unshift("Zafar")
// console.log("After : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);

// 2) using slice():
// var Arr1 = [1,2,3,4,5,6,7,8,9];
// var Arr2 = Arr1.slice(0,5);
// console.log("Before : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
// Arr1.push(100);
// Arr2.unshift("Zafar")
// console.log("After : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);


// 3) spread Operator :  ...
// var Arr1 = [1,2,3];
// var Arr2 = [...Arr1,1000];
// console.log("Before : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
// Arr1.push(100);
// Arr2.unshift("Zafar")
// console.log("After : ");
// console.log("Value of Arr1 :",Arr1);
// console.log("Value of Arr2 :",Arr2);
