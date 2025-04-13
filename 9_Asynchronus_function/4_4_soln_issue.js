function Maggilaao(cb){
    console.log("Maggi lane chale gye");
    setTimeout(function(){
        console.log("Maggi lekar aa gye");
        cb(Maggikhaao);
    }, 2000)
}

function MaggiBanao(cb){
    console.log("Maggi banana start");
    setTimeout(function(){
        console.log("Maggi ban gai");
        cb();
    }, 2000)
}
function Maggikhaao(){
    console.log("Maggi khana start");
    setTimeout(function(){
        console.log("Maggi samapt");
    }, 2000)
}

Maggilaao(MaggiBanao);