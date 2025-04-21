let reduce = document.querySelector('.reduce');
let cnt = document.querySelector('.cntValue');
let increase = document.querySelector('.increase');
//.innerText is an string 
//string ko number main change karne ke liye hm 1.parseInt()
// 2.Number()
// 3.Use +() sign in front of integer
reduce.addEventListener('click', ()=>{
    cnt.innerText = Number(cnt.innerText)-1;
})

increase.addEventListener('click', ()=>{
    cnt.innerText = Number(cnt.innerText)+1;
})