let obj = {
    a : 1,
    b : 2,
    c : 3 
}

// in objects for in loop works but for of do not
for(let k in obj){
    console.log(obj[k]);
}