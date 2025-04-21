//document.querySelector sara nahi lake deta balki upar se sirf 
// let movies = document.querySelector('.movie');
// console.log(movies);

let movieList = document.querySelectorAll('.movie')
console.log(movieList)

movieList.forEach((items)=>{
    items.style.color = 'red'
    items.style.listStyle = 'number'
})
