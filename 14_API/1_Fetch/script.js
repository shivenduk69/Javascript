let btn = document.querySelector('.btn');

let div = document.querySelector('div');
btn.addEventListener('click', throttling((ev)=>{

    fetch('https://extinct-api.herokuapp.com/api/v1/animal/')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            div.innerText = res;
            
        })
}, 2000));