/*
document.getElementById()
document.querySelector()

*/
// <--domClass 01 -->
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

// <--domClass 02 -->
// var listItem=document.getElementsByClassName('list-group-item');
// //console.log(listItem);
// listItem[0].style.color='red';
// listItem[1].textContent='Hello World';

// const listItem=document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listItem);
// const list=document.querySelectorAll('.list-group-item');
// list.forEach((item,index)=>{

//     console.log(item.className,item,index);
//     // item.textContent=index+' :Biplab Uddin';
//     item.style.color='#fff';
//     item.style.backgroundColor='red';
//     item.style.marginTop='2px';
//     item.style.borderRadius='10px';
//     item.style.fontWeight=600;
//     item.textContent=`${index+1}  :Biplab Uddin`;
// })
//list[0].style.color='red';

// // <--domClass 03 -->
// let result;
// const list=document.querySelector('ul.list-group');
// // const listItem=document.querySelector('li.list-group-item');
// // result=listItem.children;
// // result=listItem.childNodes[0].nodeType;
// result=list.children[3].children[0].id='biplab-list';
// result =list.firstElementChild;
// result=list.lastElementChild;

// result=list.parentNode;
// result=list.nextElementSibling;
// result=list.previousElementSibling;
// /*
// value:
// 1-element;
// 2-attribute(dep);
// 3-taxt node;
// 8-comment;
// 9-document itself;
// 10-Doctype;

// */
// console.log(result);

// // <!-- class 4 create new dom element-->
// const listItem=document.createElement('li');
// /* Add Class Name */
// listItem.className='list-group-item d-flex justify-content-between align-items-center';
// /* Add id */
// listItem.id='biplab-item';
// /* Add attribute */
// listItem.setAttribute('title','New Task List');

// /* create  text node and append */
// listItem.appendChild(document.createTextNode('Biplab Uddin'));
// document.querySelector('ul.list-group').appendChild(listItem);
// const link=document.createElement('a');
// link.className='delete-item secondary-content';
// link.innerHTML='<i class="fa-solid fa-xmark"></i>';
// listItem.appendChild(link);
// console.log(listItem);


// //<!-- class 5 replace and removing element from dom -->
// //Create New element
// let newTitle=document.createElement('h3');
// newTitle.className='new-title text-center';
// newTitle.id='task-title';
// newTitle.appendChild(document.createTextNode('New Title'));

// const oldElement=document.querySelector('.card-title');
// const oldElementParent=oldElement.parentElement;
// oldElementParent.replaceChild(newTitle,oldElement);
// console.log(oldElement);

// //remove element
// const list=document.querySelector('ul');
// const listItem=document.querySelectorAll('li');
// //listItem[0].remove();
// list.removeChild(listItem[3]);
// listItem[1].classList.add('bg-danger');
// listItem[1].classList.remove('bg-danger');


//  //<!-- class 6  Event Listener -->
//  const btn=document.querySelector('#addButton');
// //  btn.addEventListener('click',function(){

// //      console.log('Event Triggerd');
// //  });
// //  btn.addEventListener('click',onClick);
// //  function onClick(){
// //     console.log('Events Triggered');
// //  }

// btn.addEventListener('click',(event)=>{
//     console.log(
//         event.target.id, 
//         event.target.className,
//         event.target.classList,
//         event.type,
//         event.timeStamp,
//         event.clientX,event.clientY,
//         event.offsetX,event.offsetY);
//     event.preventDefault();
// });


const btn=document.querySelector('#addButton');

// btn.addEventListener('dblclick',(e)=>{
// console.log(e.type);
// });

// btn.addEventListener('mouseenter',(e)=>{
// console.log(e.type);
// });

// btn.addEventListener('mouseleave',(e)=>{
// console.log(e.type);
// });

// btn.addEventListener('mouseover',(e)=>{
// console.log(e.type);
// });

const title=document.querySelector('#t-title');
btn.addEventListener('mousemove',(e)=>{
    title.textContent=`X:${e.offsetX}; Y:${e.offsetY};`
    title.style.color='#ddd';
    title.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},200)`
console.log(e.type);
});