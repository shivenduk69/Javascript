//How setTimeout work this is the best example
//Output
//Aur batao
//kya veere(after 4 sec)
//Hello World!!(after 5 sec)
setTimeout(function(){
    console.log("Hello World!!");
}, 5000);

setTimeout(function(){
    console.log("Kya veere");
}, 4000);

console.log("Aur batao");

