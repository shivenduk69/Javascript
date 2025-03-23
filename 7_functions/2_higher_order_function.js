function outer(){
    function inner(){
        console.log("Ganga is a holy River");
        //function ke andar agar kuchh bhi return na karein to wo undefined return karta hai
    }
    return inner;
    //return inner()
}

let f = outer();
//if i have to print this f
console.log(f);//undefined




function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function Operation(add, sub){
    console.log(add(10, 20));
    console.log(sub(10, 20));
}
Operation(add, subtract);