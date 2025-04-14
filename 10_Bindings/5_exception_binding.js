function hello(){
    console.log(this);//predict output??
    function kyun(){
        console.log(this);//predict output??
    }
    kyun();
}
let obj = {
    a : 1,
    b : 2
}
hello.call(obj);


//In arrow function this will always point to window

let gello  = (name)=>{
    console.log("Name", name);
    console.log("a", this.a);//output will be window
}

gello.call(obj, "Shivendu");
