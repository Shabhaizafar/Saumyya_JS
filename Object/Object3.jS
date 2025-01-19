//    - Spread operator in objects.
// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     age : 12
// };

// how to create a Clone : 
// var obj2 = obj;

// console.log("Object : 1 ",obj);

// console.log("Object : 2 ",obj2);

// obj2.Gender = "Male";

// console.log("Object : 1 ",obj);

// console.log("Object : 2 ",obj2);

// var obj2 = {...obj};
// console.log("Object : 1 ",obj);

// console.log("Object : 2 ",obj2);

// obj2.Gender = "Male";

// console.log("Object : 1 ",obj);

// console.log("Object : 2 ",obj2);

/////////////////////////////////////////////////
//    - Object Destructuring.
// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     age : 12
// };
// console.log(obj.fname);

// var {fname} = obj;
// var {fname : firstname,lname} = obj;


// console.log(firstname);
// console.log(lastname);
/////////////////////////////////////////////////
//    - Objects inside Array.
var arr = [
    {fname : "Raj",lname : "Shah",Age : 13},
    {fname : "Ajay",lname : "Sharma",Age : 12},
    {fname : "Vijay",lname : "Patel",Age : 13},
    {fname : "Sahil",lname : "Shah",Age : 15}
];

// console.log(arr);

// console.log(...arr);

// console.log(...arr);

for (const element of arr) {
    console.log(element);
    for (const key in element) {
        console.log(key+":"+element[key]);
    }
}

