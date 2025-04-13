//write a function for 1sec delay in output
//in js we write time in milisecond
function delayOneSecond(){
    
    let currentTIme = new Date().getTime();
    
    while(new Date().getTime() - currentTIme <1000){

    }
}

delayOneSecond();
console.log("Hello World");