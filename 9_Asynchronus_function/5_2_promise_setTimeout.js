//Using setTimeout inside promise
let kyavaadapurahua = true;

let p = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(kyavaadapurahua){
            resolve("Vaada Pura hua");
        }
        else{
            reject("Aisi taisi kardi vade ki");
        }
    }, 2000)//2 sec time delay
})

// p.then(function(msg){
//     console.log("Message ayya hai ", msg);
// }, function(err){
//     console.log("Error aaya hai ", err);
// })


//2nd way
p.then((msg)=>{
    console.log("Message aaya hai ", msg);
})
.catch((err)=>{
    console.log("Error aaya hai ", err);
})
