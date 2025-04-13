//syntax
//let p = new Promise(function(resolve, reject){});
//resolve ko call karna matlab fullfil ho gya
//reject ko call karna mtlp fail ho gya

//p.then(resolvefun, rejectfun)
//p.then(resolvefun).catch(rejectfun)


let kyavaadapurahua = true;

let p = new Promise(function(resolve, reject){
    if(kyavaadapurahua){
        resolve("Vaada pura hua");
    }
    else{
        reject("Aisi taisi kar di vade ki")
    }
})


//1st way
// p.then(function(msg){
//     console.log("Message aaya hai ", msg);

// }, function(err){
//     console.log("Error aaya hai ", err);
// })


//2nd way

p.then(function(msg){
    console.log("Message aaya hai ", msg);
})
.catch(function(err){
    console.log("Error aaya hai ", err);
})