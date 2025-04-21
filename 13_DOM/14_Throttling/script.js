let btn = document.querySelector('.btn');

function clickHandler(){
    console.log("clicked");
}

btn.addEventListener('click', throttling(clickHandler, 2000));//2 sec main ek hi bar click hoga

function throttling(fun, delay){
    let initialTime = 0;
    return function(){
        if(new Date().getTime() - initialTime >=delay){
            initialTime = new Date().getTime();
            fun();
        }
        else{
            console.log("Abhi time nahi hua hai");
        }
    }
}