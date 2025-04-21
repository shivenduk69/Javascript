let body = document.body

//Adding classList

body.classList.add('theme-1');

//Removing class List

setTimeout(()=>{
    body.classList.remove('theme-1');
}, 3000)


//toggle - agar class hai to remove kr dega and agar nahi hai to add kr dega

body.classList.toggle('theme-2');
