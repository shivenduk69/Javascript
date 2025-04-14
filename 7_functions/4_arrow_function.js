//Arrow functions are also a lambda function

let fun = (a, b)=>{
    return a+b;
}

let a = fun(2, 3);
console.log(a);


//Other way by default return
let func = (a, b)=>a+b;//default return, it will work in the same way as above function do

let b = func(3, 4);
console.log(b);
