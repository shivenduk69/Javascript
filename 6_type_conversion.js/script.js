console.log(0 == '\t'); //true, bcoz of type conversion
console.log(0 == '\n');// true, bcoz of type conversion
console.log('\t' == '\n');// false, bcoz of no type conversion


//To convert a value into number we can use + sign before it
console.log("converting '\\t' into number -> ", +'\t');
console.log("converting '\\n' into number -> ", +'\n');
console.log(+'a');//NaN


//comparison between array and number 
//since array is big datatype so array will convert into number
console.log("[]==0 : ", []==0);//true

console.log("[1]==0 : ", [1]==0);//false

//comparison of string with array
console.log("[] == '\\t : ", [] == '\t');//false

//converting empty array into number
console.log("converting [] or empty array into number -> ", +[]);

//A more important comparison
console.log("comparing +[] with '\\t' -> ", +[] == '\t');//true