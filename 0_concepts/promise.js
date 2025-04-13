let vaadapurahua = false;
let p = new Promise(function(resolve, reject){
    if(vaadapurahua){
        resolve("Vaada Pura hua");
    }
    else{
        reject("Aisi taisi kar di vaade ki");
    }
})

.then(function(result){
    console.log("Message aaya hai ", result);
}, function(error){
    console.log("Error aaya hai ", error);
})
// .catch((error)=>{
//     console.log("Error aaya hai ", error);
// })

