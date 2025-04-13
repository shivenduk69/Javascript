//in this program we will first call resolve and then .then and .catch
// it will also work fine

let p = new Promise((resolve, reject)=>{
    resolve();
})

setTimeout(()=>{
    p.then(()=>{
        console.log("Kya jii");
    })
}, 3000);

