//in this program we will see chaining of promises
//A promise always returns a promise and this is called chaining of promise
let p = new Promise((resolve, reject)=>{
    resolve("Hello");
})

p.then((result)=>{
    console.log(result);
    return "World";
}).catch(()=>{
    console.log("Error aaya hai");
}).then((msg)=>{
    console.log(msg);
})