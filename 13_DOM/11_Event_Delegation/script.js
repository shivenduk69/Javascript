let li = document.querySelectorAll('.box');

// li.forEach((items)=>{
//     items.addEventListener('click', ()=>{
//         console.log(items);
//     })
// })

// ab agar ek aur box li main add karnge to uspe event Listener same nahi lagega

//Par agar hm parent par hi event Listener laga den to bad main bhi add kiya hua child par same hi event Listener lag jayega

let container = document.querySelector('.container');

container.addEventListener('click', (event)=>{
    // console.log(event)
    let item = event.target;
    console.log(item);
    console.log(item.innerText);
})