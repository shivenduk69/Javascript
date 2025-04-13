//when we call a function which has not a return typr inside then why does it prints undefined

function fun(){

}

console.log(fun);//prints function as we know function is also a datatype in js that's why it gets printed
console.log(fun());//undefined bcoz there is no return statement on function so function is by default returning undefined