function grandfather(){
    x = 1;
    function parent(){
        y = 1;
        function child(){
            
        }
        return child;
    }
    return parent;
}

let f = grandfather();
let f1 = f();