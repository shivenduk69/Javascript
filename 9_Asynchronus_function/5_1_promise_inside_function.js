// Promise inside function

let kyavaadapurahua = true;
function p(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(kyavaadapurahua){
                resolve("Vaada pura hua");
            }
            else{
                reject("Aisi taisi kardi vaade ki");
            }
        }, 2000)
        
    })
}

p()
.then(function(msg){
    console.log("Message aaya hau ", msg);
})
.catch(function(err){
    console.log("Error aaya hai ", err);
})