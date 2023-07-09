/*  local storage */
let name='Biplab Uddin';
localStorage.setItem('secret',name); //value set  -----> key:value;

let result;
result=localStorage.getItem('secret'); //value red
console.log(result);

//Remove item
//localStorage.removeItem('secret');

/* session Storage */
