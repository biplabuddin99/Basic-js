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



// let val=document.querySelector('#t-title');
// val=document.querySelectorAll('.card-body');
// //console.log(val);
// document.querySelector('li').style.color='red';
// document.querySelector('li:last-child').style.color='red';
// document.querySelector('li:nth-child(3)').style.color='red';
// document.querySelector('li:nth-child(4)').textContent='Biplab';


// var listItem=document.getElementsByClassName('list-group-item');
// //console.log(listItem);
// listItem[0].style.color='red';
// listItem[1].textContent='Hello World';

const listItem=document.querySelector('ul').getElementsByClassName('list-group-item');
console.log(listItem);
const list=document.querySelectorAll('.list-group-item');
list.forEach((item,index)=>{

    console.log(item.className,item,index);
    // item.textContent=index+' :Biplab Uddin';
    item.style.color='#fff';
    item.style.backgroundColor='red';
    item.style.marginTop='2px';
    item.style.borderRadius='10px';
    item.style.fontWeight=600;
    item.textContent=`${index+1}  :Biplab Uddin`;
})
//list[0].style.color='red';