/*  get the button */ 
const btn=document.getElementById('button');

//console.log("button");
btn.addEventListener('click',loadData);

function loadData(){

    /*  create XHR Object  */
    const xhr=new XMLHttpRequest();

 /* panel setup/open port */
    xhr.open('GET','posts.json',true);

    xhr.onload=function(){
        console.log(xhr.readyState);
        if(this.status==200){
            const posts=JSON.parse(this.responseText);
            let output='';
            posts.forEach(post =>{
                 output+=`
                <ul>
                <li>ID: ${posts.id}</li>
                <li>Title: ${posts.title}</li>
                <li>Body: ${posts.body}</li>
                <li>User ID: ${posts.userId}</li>
                </ul>
                `;
            });
            document.getElementById('posts').innerHTML=output;
        }
    }

    // xhr.onreadystatechange=function(){
    //     if(this.status==200 && this.readyState===4){
    //         console.log(this.responseText);
    //     }
    // }

    /*  
    readyState values
    0:request not initialized
    1:server connection established
    2:request received
    3:processing request
    4:request finished and response is ready

      */

    /*  send Request */
    xhr.send();
}