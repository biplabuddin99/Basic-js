let fifaCountries=['Canada','Ghana','Iran','Serbia','Uruguay','Japan','Costrarica','England'];

/*Basic for loop */
/*
for ------Array
for in ------Object
for of-------Array/String
foreach------Array
*/

// for (let index = 0; index < fifaCountries.length; index++) {
//     const element = fifaCountries[index];
//     console.log(element);
    
// }

/* for each ES6 */
// fifaCountries.forEach(element=>{
//     console.log(element)}
//     );

let person={
    forstName:"Biplab",
    lastName:"Uddin",
    age:27,
}
for(let x in person){
    console.log(person[x]);
}

let str="Vue js 3 Whith Master class";
for(const iterator of str){
    console.log(iterator);
}