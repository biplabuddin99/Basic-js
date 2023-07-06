/*
document.getElementById()
document.querySelector()

*/
// var val=document.getElementById('t-title');
// console.log(val);

// /* get elements item details */
// console.log(val.id);
// console.log(val.className);
// console.log(val.classList);

// /*  changing the styles */
// document.getElementById('addButton').style.background='#f43f5e';
// val.style.backgroundColor='#4d7c0f';
// document.getElementById('t-title').style.padding='10px';
// document.getElementById('t-title').style.color='#fff';
// document.getElementById('t-title').style.textAlign='center';
// document.getElementById('t-title').style.border='2px solid #FF5733';
// document.getElementById('t-title').style.borderRadius='10px';

// /*  change the contents */
// document.getElementById('t-title').textContent='Tasks Collection';
// document.getElementById('t-title').innerText='Task List';
// document.getElementById('t-title').innerHTML='<span style="color:#a855f7">Task</span>';

let val=document.querySelector('#t-title');
val=document.querySelectorAll('.card-body');
//console.log(val);
document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='red';
document.querySelector('li:nth-child(4)').textContent='Biplab';