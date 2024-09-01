// String : 
// String is a Collection of Char's.
// String same as like an Array.but not Array.
// Index

// How to Use String : 

//double quote
// var str1 = "Royal";
// console.log(str1);
// console.log(typeof str1);

//Single quote
// var str2 = 'Royal';
// console.log(str2);
// console.log(typeof str2);

// Back Tick  ( ` )
// var str3 = `Royal`;
// console.log(str3);
// console.log(typeof str3);

// Multiple Line String  :

//Not Possible
// var s1 = "Royal
// Techno
// soft"

// var s2 = 'Royal
// Techno
// soft'

//Possible /True
// var s3 = `Royal
// Techno
// soft`;
// console.log(s3);
// console.log(typeof s3);


// - String Indexing.
// var Str = "Royal Technosoft pvt ltd we45tyhgssd wertyhnb";
// //index    0123456789..............
// console.log(Str);

// // console.log(Str[0]);
// // console.log(Str[1]);
// // console.log(Str[23]);

// // Property
// console.log(Str.length);
// console.log(Str[Str.length-1]);


// - Useful string methods.
var Str = "Royal Technosoft pvt ltd";
console.log(Str);


// 1) Str.charAt : 
// console.log(Str.charAt(10));// "n"
// console.log(Str.charAt(100)); // ""


// 2) Str.charCodeAt : 
console.log(Str.charCodeAt(10));// 110
console.log(Str.charCodeAt(100));// NaN


// 3) Str.concat : 
// var s2 = " Zafar";
// console.log(Str.concat(s2," Shabhai"));
// console.log(Str.concat(Str));


// 4) Str.includes
var s = "Soft";

console.log(Str.includes(s));