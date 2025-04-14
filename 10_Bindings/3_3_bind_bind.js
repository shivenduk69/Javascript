// bind doesnot calls function immadiately rather it returns function immadiately which we can use later on

function hello(state, country){
    console.log("Name", this.name);
    console.log("Hobby",this.hobby);
    console.log("State", state);
    console.log("Country", country);
}

let person = {
    name : "Tuko",
    hobby : "Cricket"
}

//using .bind()
let f = hello.bind(person);//in f the function hello has been returned
//using hello
f("Bihar", "India");