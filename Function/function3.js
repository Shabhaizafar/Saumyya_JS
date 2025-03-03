// Arrow Function : 

//   i. without argument and without return type
// var sayHello  =  () => {
//     console.log("Hello Everyone !!!");
// }
// sayHello(); // function call/invoked
// sayHello(); // function call/invoked

//  ii. with argument and without return type
var addition =  (n1, n2) => {   // n1,n2   parameter
    console.log("Addition : ", n1 + n2);
}
addition(12,13);  // 12 13   argument
// addition(1,2);    // 1 2    argument

// iii. without argument and with return type

// var Pi =  () => {
//     return 3.14;   //with return
// }
// console.log("Value of Pi : ",Pi());
// var ans = Pi();
// console.log(ans);

//  iv. with argument and with return type
var result =  (mark) => {  //mark parameter
    if (mark >= 33) {
        return "Pass";    //return
    } else {
        return "Fail";   //return
    }
}
console.log("Result is : ",result(50));  //50 argument
// var final  = result(20);
// console.log("Final : ",final);



var sayHello  =  () => console.log("Hello Everyone !!!");console.log("erf");
sayHello(); // function call/invoked


var addition =  n1 => console.log("N1 : ", n1);
addition(12); 


// var Pi =  () => return 3.14;   //error
// console.log("Value of Pi : ",Pi());



 
// using Expression  : 
// wap to print n1 to n2. 



// using Arrow Function : 
// wap to print square of n1 to n2. 