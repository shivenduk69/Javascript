let btn = document.querySelector('.btn');

btn.addEventListener('click', throttling((ev)=>{

    fetch('https://extinct-api.herokuapp.com/api/v1/animal/')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            // res.forEach((data)=>{
            //     console.log(data.text);
            // })
        })
}, 2000));