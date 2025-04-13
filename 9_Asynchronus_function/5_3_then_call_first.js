// in this program, we will first call then and then resolve
//this program will work fine bcoz pahle resolve and reject function declare ho rha hai then hm use call kar rhe hain

let p = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve();
    }, 2000)
    
})
p.then(function(){
    console.log("Dekho rukega for 2 sec");
})
.catch(function(){
    console.log("Abbey ye kya kiya");
})