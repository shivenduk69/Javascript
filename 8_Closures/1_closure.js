
function parent(){
    var x = 1;

    function child(){
        x++;
        console.log(x);
    }
    return child;
}

var f = parent();
var f1 = parent();
f();
f();
f();

f1();
f1();
f1();
