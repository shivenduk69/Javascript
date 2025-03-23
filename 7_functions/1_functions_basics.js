function add(a, b){
    return a+b;
}
console.log(add(10, 20));



//functions can be stored in js
let sayHello = function hello(str){
    return str + "World";
}

console.log(sayHello("Hello "));//here sayhello is called bcoz we have stored the hello function in sayHello
// console.log(hello("Hello"));//throw error


//since there is no use of giving name to functions strored in variable so prefer not to give name and this type of function is called anonymous function
let sayBye = function(name){
    return "Bye " + name; 
}
console.log(sayBye("shivendu"));
