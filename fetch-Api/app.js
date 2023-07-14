// const btnText=document.getElementById('btn-text');
// const btnJSON=document.getElementById('btn-json');
// const btnAPI=document.getElementById('btn-api');

// btnText.addEventListener('click',()=>{
//     fetch('data.txt')
//     .then((res)=>{
//         console.log(res);
//         return res.text();
//     }).then((data)=>{
//         console.log(data);
//         post.innerHTML=data;
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

// btnJSON.addEventListener('click',()=>{
//     fetch('posts1.json')
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//         let output='';
//         data.forEach((post)=>{
//             output+=`
//             <li>${post.title}</li>
//             <li>${post.id}</li>
//             <li>${post.userId}</li>
//             `;
//         });
//         post.innerHTML=output;
//     }).catch((err)=>{
//         console.log(err);
//     })
// });

// btnAPI.addEventListener('click',()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//         let output='';
//         data.forEach((todo)=>{
//             output+=`
//             <li>${todo.id}</li>
//             <li>${todo.title}</li>
//             <li>${todo.userId}</li>
//             `
//         });
//         post.innerHTML=output;
//     }).catch((err)=>{
//         console.log(err);
//     })
// });



/* async awit */

// async function newFun(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('hello world'),1000)
//     });
//     const error=false;
//     if(!error){
//         const res= await promise; //wait untill promise is resolved
//         return res;

//     }else(
//         await Promise.reject(new Error('some thing wait wrong'))
//     )
// }
// newFun()
// .then(res=>console.log(res))


async function getPost(){
    const response =await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();
    return data;
}
console.log(getPost());
getPost().then(post=>console.log(post))