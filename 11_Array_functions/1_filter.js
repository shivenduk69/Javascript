let arr = [1, 2, 7, 4];
let brr = arr.filter((val, index, arr)=>{
    return index%2 != 0;
});
console.log(brr);