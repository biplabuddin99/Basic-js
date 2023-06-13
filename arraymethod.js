/* Array Method */

let countriesA=['Mexico','France','USA','Denmark','Germany','Italy','Spain','Poland'];
let countriesB=['Canada','Ghana','Iran','Serbia','Uruguay','Japan','Costrarica','England'];
// console.log(countries.length);

/* Entry/Insert
1.Push  --------last entry
2.Unshift  ------first entry
*/
// countries.push("Brazil");
// countries.push("Argentina");
// console.log(countries);

// countries.unshift('Tunisia');
// countries.unshift('Saudi Arobia');
// console.log(countries);

/*Ejech Entry 
1.pop  --------last left
2.shift -------first left
*/
// countries.pop();
// console.log(countries);
// countries.shift();
//  console.log(countries);

/*Concat */
// console.log(countriesA.concat(countriesB));

/* Reverse */
// console.log(countriesA.reverse());
/*toString ----to convert string */
// console.log(countriesA.toString(),countriesA.toLocaleString());

/* Includes------check if this array has the given element */
// console.log(countriesA.includes('Mexico'));

/* Map -------specific callback function run for each element return(new)
filter------filter out on a single condition applied on each element =>return array(new)
find--------first matched element=>return single element
every-------every on each element if condition 
findIndex----return  index number same as find 
reduce-------reducer function for each array element.
splice-------
slice
*/
// let result=countriesA.map(element,{
//     console.log(element);
// })
//ES6
// let result=countriesA.map(element=>element+'-Hello');
// console.log(result)
// let result=countriesA.map(myFunction);
// function myFunction(element){
//     console.log(element);
// }

// let result=countriesA.filter(element=>element=="Spain");
// console.log(result);
let fifaPoints=[5,6,2,3,5,6,1,0];
// let result=fifaPoints.find(element=>element>3);
// let result=fifaPoints.every(element=>element>-1);
// let result=fifaPoints.findIndex(element=>element>5);
// let result=fifaPoints.reduce((prev,curr)=>prev+curr,1);
// let result=countriesA.splice(0,2);
let result=countriesA.slice(0,2);
console.log(result);