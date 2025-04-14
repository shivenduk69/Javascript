//Filter Method

// var ages = [12, 43, 23, 19, 54, 15];

// document.writeln('Age before filter: ' + ages + '<br>');

// function checkAdult(age){
//     return age >= 18;
// }


// var filterAge = ages.filter(checkAdult);

// document.writeln('Age after filter: ' + filterAge + '<br>');



// Q1. Given an array of numbers, filter out only even number

// var num = [1, 2, ,3, 4,5 ,6 ];
// function checkEven(number){
//     if(number%2==0){
//         return number;
//     }
// }

// var evenNumber = num.filter(checkEven);
// document.writeln('Even numbers in the array are: ' + evenNumber + '<br>');



//Q3. GIven an array of objects representing people, filter out only those who are 18 or older.

// var users = [
//     {fname:'Rahul', lname:'Kumar', age:24},
//     {fname:'Muskan', lname:'Kumari', age:17},
//     {fname:'Nitin', lname:'sharma', age:20},
//     {fname:'Sahil', lname:'raj', age:23},
//     {fname:'Safiqul', lname:'Islam', age:26},
//     {fname:'Ragini', lname:'Sharma', age:15}
// ];

// var filterUser = users.filter((user)=>{
//     return user.age>=18;
// });

// console.log(filterUser);




//Q4.GIven an array of string, filter ouut only those which has length more than equal to 5

// var str = ["shivendu", "manish", "Bilal", "cat", "Dog", "Cherry", "Bash"];

// function checkStr(stri){
//     var len = stri.length;
//     if(len>=5){
//         return stri;
//     }
// }


// var filterString = str.filter((stri)=>{
//     var len = stri.length;
//     if(len>=5){
//         return stri;
//     }
// });
// document.writeln(filterString);