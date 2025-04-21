//setInterval se us time interval ke bad function chalte rhta hai

let id = setInterval(()=>{
    console.log("Hello");
}, 2000);



//isko rokne ke liye hm id clear timeout kar skte hain

let body = document.body;
let x = 1;

setInterval(()=>{
    x = 1 - x;
    if(x){
        body.style.backgroundColor = 'black';
        body.style.color = 'red';
    }else{
        body.style.backgroundColor = 'white';
        body.style.color = 'blue';
    }
}, 100)