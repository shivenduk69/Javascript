//clear timeout is used to stop settimeout

let id = setTimeout(function(){
    console.log("Hello chiku");
}, 5000);

clearTimeout(id);
console.log("Kya bhai");