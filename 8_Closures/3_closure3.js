function grandfather(){
    x = 1;
    function parent(){
        x++;
        function child(){
            x++;
            console.log(x);
        }
        return child;
    }
    return parent;
}

let fun = grandfather();

let f1 = fun();
let f2 = fun();

//Predict the output 1st by your own
f1();
f1();
f2();
f2();