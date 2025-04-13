//write a function which prints Hello WOrld with n seconds delay

function oneSecondDelay(){
    let currentTime = new Date().getTime();
    while(new Date().getTime() - currentTime <1000){

    }
}

function nSecondDelay(n){
    for(let i = 0; i<n; i++){
        oneSecondDelay();
    }
}

nSecondDelay(5);
console.log("Hello Manish");