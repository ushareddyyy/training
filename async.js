/* console.log(10);
console.log(120);
/* setTimeout(()=>{
    console.lOg(30);//console.log(30);
},5000) */
/* setInterval(()=>{
    document.writeln('usha');
},10000) */
/* setInterval(()=>{
    console.log(30);
},5000)
console.log(1301);
console.log(910); */
/* let p1=new Promise((resolve,rejected)=>{

}) */
//console.log(p1);
/* let p2=new Promise((resolve,rejected)=>{
    resolve("success");
})
//console.log(p2);
p2
.then((response)=>console.log(response))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally for both"));
 */
/* let p3=new Promise((resolve,rejected)=>{
    rejected("failed");
})
//console.log(p3);
p3.then(data=>console.log(data))
p3.catch(error=>console.log(error))
p3.finally(()=>console.log("finally")) */

//!api fetching

/* function fetchUsers(){
    let response=fetch("https://jsonplaceholder.typicode.com/users");
    //console,log(response);
    response.then(result=>{
         console.log(res.json()); 
       return result.json().then(data=>{
         console.log(data); 
        let store=document.getElementById("store");
        console.log(store);
        data.map(user=>{
            //console.log(user);
            store.innerHTML+=`
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
            <tr>
            `
        })
       })
    })
    .catch(err=>console.log(err))
}
fetchUsers(); */

/* function demo(){
    console.log("start");
    console.log(10);
    return;
    console.log(20);
    console.log("end");
}
demo(); */
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success");
    },5000) 
})
async function demo(){
    console.log("Start");
    let x=await p;
    console.log(x);
    console.log("End");
};
demo();

async function fetchusers(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    let data=await response.json();
    console.log(data);

}
fetchusers();