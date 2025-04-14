//Reduce method

//it returns a single value from an array
let brr = [1,2,3,4,5];
let arr = brr.reduce((a, b)=>{
    return a<b ? b : a;
});
console.log(arr);

