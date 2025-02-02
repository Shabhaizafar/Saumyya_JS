// What is a Function. : 
// -> Function is Set of code which is Perform specific Task.

// There are Two Types : 
// 1. In-Built Function
        // prompt,confirm,alert etc
// 2. User-defined Function
        // create

    // 1. Function Name
        //   i. without argument and without return type
function sayHello(){
    console.log("Hello Everyone !!!");
}
// sayHello(); // function call/invoked
// sayHello(); // function call/invoked

        //  ii. with argument and without return type
function addition(n1,n2){   // n1,n2   parameter
    console.log("Addition : ",n1+n2);
}
// addition(12,13);  // 12 13   argument
// addition(1,2);    // 1 2    argument

        // iii. without argument and with return type

function Pi(){
    return 3.14;   //with return
}
// console.log("Value of Pi : ",Pi());
// var ans = Pi();
// console.log(ans);

        //  iv. with argument and with return type
function result(mark){  //mark parameter
    if(mark>=33){
        return "Pass";    //return
    }else{
        return "Fail";   //return
    }
}
// console.log("Result is : ",result(50));  //50 argument
// var final  = result(20);
// console.log("Final : ",final);

    // 2. Function Expression
    // 3. Arrow Function
    // 4. Anonymous Function
    // 5. IIFE Function 
    // 6. callback Function
    // 7. Higher Ordered Function
    // 8. Getter-Setter Function 
    // 9. recursion
    // 10. Generator Function







    /*
        1. bio Data print
        2. user > bio Data
        3. inner function > 2 values  > subtraction return
        4. 3 values > return multiplication 
    */ 