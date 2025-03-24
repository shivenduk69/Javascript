//Kisi bhi function main hoisting iske scope ke according hota hai

function fun(){
    console.log(x);
    var x = 10;
    console.log(x);
}

fun();
for(var i = 0; i<10; i++){
    
}

console.log(i);
console.log(x);



//How will compiler see after hoisting

var i;
function fun(){
    var x;
    console.log(x);//undefined
    x = 10;
    console.log(x);//10
}

fun();
for(i = 0; i<10; i++){

}

console.log(i);//10
console.log(x);//error->x is not defined