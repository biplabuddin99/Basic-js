// /*  local storage */
// let name='Biplab Uddin';
// localStorage.setItem('secret',name); //value set  -----> key:value;

// let result;
// result=localStorage.getItem('secret'); //value red
// console.log(result);

// //Remove item
// //localStorage.removeItem('secret');

// /* session Storage */
// sessionStorage.setItem('name',name);
// console.log(sessionStorage.getItem(name));



let auth={
    name: 'Admin',
    email: 'admin@gmail.com',
    usercode: 'Nid-123456789',
    token: 'eyanogaphioahfajkerhzniosahfi',
};

localStorage.setItem('secret',JSON.stringify(auth));

let result;
result=JSON.parse(localStorage.getItem('secret'));
console.log(result.name);
console.log(result);