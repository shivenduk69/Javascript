let btn = document.querySelector('button');

let list = document.querySelector('.movie');

btn.addEventListener('click', ()=>{
    let pop = document.createElement('li');
    pop.innerText = 'Thor';
    let img = document.createElement('img');
    let url = 'https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg';
    img.setAttribute('src', url)

    list.appendChild(pop);
    list.appendChild(img);
})