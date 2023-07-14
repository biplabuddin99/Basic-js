const btnText=document.getElementById('btn-text');
const btnJSON=document.getElementById('btn-json');
const btnAPI=document.getElementById('btn-api');

btnText.addEventListener('click',()=>{
    fetch('data.txt')
    .then((res)=>{
        console.log(res);
        return res.text();
    }).then((data)=>{
        console.log(data);
        post.innerHTML=data;
    }).catch((err)=>{
        console.log(err);
    });
});

btnJSON.addEventListener('click',()=>{
    fetch('posts1.json')
    .then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        console.log(data);
        let output='';
        data.forEach((post)=>{
            output+=`
            <li>${post.title}</li>
            <li>${post.id}</li>
            <li>${post.userId}</li>
            `;
        });
        post.innerHTML=output;
    })
})
