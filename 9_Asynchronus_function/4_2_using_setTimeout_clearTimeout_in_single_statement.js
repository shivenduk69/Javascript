// use setTimeout and clearTimeout in single statement


let id = setTimeout(function(){
    console.log("Hello Pokemon");
}, 5000, setTimeout(function(){
    clearTimeout(id);
}, 6000))