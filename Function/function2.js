// Function Expression : 
//   i. without argument and without return type
var sayHello  = function () {
    console.log("Hello Everyone !!!");
}
// sayHello(); // function call/invoked
// sayHello(); // function call/invoked

//  ii. with argument and without return type
var addition = function (n1, n2) {   // n1,n2   parameter
    console.log("Addition : ", n1 + n2);
}
// addition(12,13);  // 12 13   argument
// addition(1,2);    // 1 2    argument

// iii. without argument and with return type

var Pi = function () {
    return 3.14;   //with return
}
// console.log("Value of Pi : ",Pi());
// var ans = Pi();
// console.log(ans);

//  iv. with argument and with return type
var result = function (mark) {  //mark parameter
    if (mark >= 33) {
        return "Pass";    //return
    } else {
        return "Fail";   //return
    }
}
// console.log("Result is : ",result(50));  //50 argument
// var final  = result(20);
// console.log("Final : ",final);