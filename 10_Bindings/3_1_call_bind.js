
//in this program we will bind this keyword through .call()
//.call() se hm this kisko point karega wo set karenge explicitly
//call calls/invoke function immadiately
//Syntax - fun_name.call(object_this_will_point, Arguments)

function hello(state, country){
    console.log("Name ", this.name);
    console.log("Hobby ", this.hobby);
    console.log("State ", state);
    console.log("Country ", country);
}

let person1 = {
    name : "Harsh",
    hobby : "Cricket"
}

let person2 = {
    name : "Sonu",
    hobby : "People Talk"
} 

hello.call(person1, "Bihar", "India");
hello.call(person2, "Bihar", "India");