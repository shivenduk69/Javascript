let arr = [1, 2, 3, 4];
let brr = arr.map((val, index, arr)=>{
    return val*val;
});
console.log(brr);