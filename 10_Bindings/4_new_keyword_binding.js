//new keyword se hm new object/this banate hain(just like we do in constructor function)

function person(name, age){
    this.name = name;
    this.age = age;
}

let shivam = new person("Shivam", 18);
console.log(shivam);