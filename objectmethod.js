// Object literals

let car={
    name:"Porche",
    model:912,
    weight:850,
    color:"red"
}
// console.log('car:>>',car);
//Access Properties
// console.log(car.name,car.model,car['weight']);

/* Get the properties of an Object ->Array */
let result=Object.getOwnPropertyNames(car);
let keys=Object.keys(car);
// console.log(result,keys);

/* Properties value change */
// car.name=="Lancer";
// car.model="Evo 10";
// car.weight=980;
// car.color="Black"

// Object.defineProperty(car,"model",{value:'Evo 9'});
// console.log('car:>>',car);
let arr=[1,2,3,4,5,6,7];
arr='www.instructory.net';

for(const x of arr){
    console.log(x);
}