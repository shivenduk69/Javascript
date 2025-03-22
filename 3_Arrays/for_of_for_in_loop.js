let arr = [1, 2, 3, true, "Hello"];
//for of loop 
for(let i of arr){
    console.log(i);
}

//for in loop

for(let i in arr){
    console.log(i);//i here is index
    console.log(arr[i]);
}