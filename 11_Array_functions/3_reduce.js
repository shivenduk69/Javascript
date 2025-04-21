let arr = [1, 2, 3, 4];
let brr = arr.reduce((acc, val)=>{
    console.log("accumulator is", acc, "and value is ", val);
    return acc+val;
});
console.log(brr);