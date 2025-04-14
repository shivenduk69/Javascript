//Map Method

// var value = [3, 4, 6, 5, 3, 2];

// var modified = value.map((v)=>{
//     return v*2;
// })
// document.writeln(modified);

// var name = ["Ash", "Babli", "man"];
// var filterName = name.filter((n)=>{
//     if(n[0]=='A' || n[0]=='m'){
//         return n;
//     }
// });

// console.log(filterName);



//Q1. Given an object, using map() to create a new array that contain only the fname and print in the form of list

// var users1 = [
//     {fname:'Rahul', lname:'Kumar', age:24},
//     {fname:'Muskan', lname:'Kumari', age:17},
//     {fname:'Nitin', lname:'sharma', age:20},
//     {fname:'Sahil', lname:'raj', age:23},
//     {fname:'Safiqul', lname:'Islam', age:26},
//     {fname:'Ragini', lname:'Sharma', age:15}
// ];

// var names = users1.map((user)=>{
//     document.writeln('<ul>');
//     return `<li>${user.fname} - ${user.lname}</li>`;
// });

// document.writeln(names);
// document.writeln('</ul>');

//Q2. do the array in upper case using map

// var str = ["apple", "ball", "cat"];

// var upperStr = str.map((stri)=>{
//     return stri.toUpperCase(stri.charAt(0));
// });
// document.writeln(upperStr);


