let btn = document.querySelector('button');
let list = document.querySelector('.parent');

let movies = [
    "Avengers",
    "Gadar",
    "Iron Man",
    "Batman"
];

let i = 0;
btn.addEventListener('click', ()=>{
    if(i == movies.length){
        list.innerHTML += `<h1> Khatam Bhai, ab ruk bhi jaa </h1>`
    }
    else{
        //1st way
        //list.innerHTML += `<li> ${movies[i]} </li>`
        //2nd Way
        list.innerHTML += '<li>' + movies[i] + '</li>';
        i++;
    }
    

})
