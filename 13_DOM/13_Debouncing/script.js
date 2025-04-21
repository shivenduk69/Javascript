let body = document.querySelector('body');

function scrollKaFunction(){
    console.log("scrolling");
}
window.addEventListener('scroll', debounce(scrollKaFunction, 1000));

function debounce(fun, delay){
    let id;
    return function(){
        clearInterval(id);
        id = setTimeout(()=>{
            fun();
        }, delay);
    }
}