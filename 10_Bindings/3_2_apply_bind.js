//this is same as explicitly binding this through .call(), the only difference is we pass arguments in an array in it

//apply also calls/invoke function immadiately
//Syntax : hello.apply(object_name, [Arguments]);

function hello(state, country){
    console.log("Name", this.name);
    console.log("Hobby",this.hobby);
    console.log("State", state);
    console.log("Country", country);
}

let person = {
    name : "Harsh",
    hobby : "Cricket"
}

//using .apply()
hello.apply(person, ["Bihar", "India"]);//using array for arguments