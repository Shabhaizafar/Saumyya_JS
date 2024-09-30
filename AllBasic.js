//    - Booleans and Comparison Operator.
// true : false 
// var a = 12;
// var b = "";
// console.log(a);
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);

// console.log(Boolean(a));
// console.log(typeof Boolean(a));
// console.log(Boolean(b));
// console.log(typeof Boolean(b));

// <,>,<=,>=,==,!=   Additional : === ,!==
// var a = 12;
// var b = 13;
// console.log(a<b);//true

// var a = 12;
// var b = 122;
// console.log(a,typeof a);
// console.log(b,typeof b);
// console.log(a==b);  // check only value are same or not 

// console.log(a===b); // first check datatype are same or not  if same then check value then return true else return false

// var a = 12;
// var b = "12";
// console.log(a!=b);  // check only value are same or not 
// console.log(a!==b); // first check datatype are same or not  if same then check value then return false else return true


/////////////////////////////////////////////
//    - Truthy and Falsy Values.

// Truthy Value : 
// true,1,12,12.3,-345,"anything"," " ,[],[23],{}
// Falsy Value : 
// false,0,"",null,undefined,NaN(Not a Number)

// console.log(12*"Z");

////////////////////////////////////////
//    - If else statement.
//    - Nested if else.
//    - If elseif else.

// 1) if statement.
// if(condition){
//     code;//code execute if condition is true else nothing
// }

// 2) if-else statement.
// if(condition){
    // code1;//code1 execute if condition is true else execute code2.
// }else{
//     code2;
// }

// 3) ladder if-else statement / else if statement.
// if(condition1){
//     code1;//this part execute if condition1 is true
// }else if(condition2){
//     code2;//this part execute if condition2 is true
// }else{
//     code3;//this part execute if all condtions are false
// }

// 4) nested if-else statement.
// if(condition1){
//     if(innercondition1){
//         code1;//this part execute if condition1 and innercondition1 both are true
//     }else{
//         code2;//this part execute if condition1 is true and innercondition1 is false
//     }
// }else{
//     code3;//this part execute if condition1 is false
// }



///////////////////////////////
//    - Ternary Operator.

// if :
// var Age = 1;
// var product;
// if(Age<10){
//     product = 'Milk';
// }else{
//     product = 'Tea';
// }

// console.log(product);

// Ternary : 
// var Age = 12;
// var product = (Age<10)? 'Milk' : "Tea";
// console.log(product);

////////////////////////////////////////////
//    - && || operator.
// var a = 0;
// var b = 13;

// console.log(a<b && a!=b);// true   else false

// console.log(a && b); //13 

// console.log(a || b); // 12

/*
AND : 
   Eq1 Eq2  o/p   
    0   0   0
    0   1   0
    1   0   0
    1   1   1

*/

///////////////////////////////////////////