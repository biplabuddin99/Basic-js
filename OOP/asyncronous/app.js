/*  get the button */ 
const btn=document.getElementById('button');
//console.log("button");
btn.addEventListener('click',loadData);

function loadData(){
    /*  create XHR Object  */
    const xhr=new XMLHttpRequest();
 /* panel setup/open port */
    xhr.open('GET','data.txt',true);
    /* run when data load */
    xhr.onprogress=function(){
        console.log('RedadyStates',xhr.readyState);
    }
    xhr.onload=function(){
        console.log(xhr.readyState);
        if(this.status==200){
            console.log(this.responseText);
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