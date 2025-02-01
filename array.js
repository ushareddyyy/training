 //const users=["usha","sai","sreeja","ashwika"];
/* console.log(users);
console.log(users[0]);
for(let i=0;i<users.length;i++){
    console.log(users[i]);
} */
//!map method
/* let x=users.map((users)=>{
    console.log(users);//usha sai sreeja ashwika
    return users; //['usha', 'sai', 'sreeja', 'ashwika']
}); */

//! for each
/* console.log(x);
let y=users.forEach((user)=>{
    return user;//undefined
})
console.log(y);  */
//const users=["usha","sai","sreeja","ashwika"];
/* users.push("ram");//add last
console.log(users);
users.pop();//remove last
console.log(users);
users.unshift("krishna");//add first
console.log(users);

users.shift();//remove first
console.log(users);
users.unshift("krishna");
console.log(users.reverse()); */
/* let x=users.join()
console.log(x,typeof(x));

let frontend=["html","css","js","reactjs","angular","vue"];
let backend=["nodejs","expressjs","java","php","golang"];
let db=["Mongodb","mysql","oracle","couchdb","mariadb"];
let fullstack=frontend.concat(backend,db);
console.log(fullstack); */
//!nested object
/* let userDetails={
	name:"Sai",
	age:18,
    city:"HYD",
    address:{
        area:"lakshmipuram",
        pincode:506207
    }
}
console.log(userDetails);
console.log(userDetails.name);
console.log(userDetails.address.area);
console.log(userDetails.address.pincode); */
//!create array of object
/* let userDetails={
	name:"Sai",
	age:18,
    city:"HYD",
    }
console.log(userDetails.name);
let userDetails1={
	name:"usha",
	age:18,
    city:"HYD",
    }
console.log(userDetails1.name);
let userDetails3={
	name:"ram",
	age:18,
    city:"HYD",
    }
console.log(userDetails3.name);
let userDetails4={
	name:"krishna",
	age:18,
    city:"HYD",
    }  *//* 
console.log(userDetails4.name); 
let userDetails=[{
	name:"Sai",
	age:18,
    city:"HYD"
    },
    {
    name:"krishna",
    age:18,
    city:"HYD"
    } 
]
userDetails.map((userDetail)=>{
    console.log(userDetail.name);
})
function fet(){
    window.fetch("")
    .then()
}
 */
let userDetails={
	name:"Sai",
	age:18,
    city:"HYD"
};
console.log(userDetails);
let x=JSON.stringfy(userDetails);
console.log("json object");
console.log(x);
let y=JSON.parse(x);
console.log("javascript object");
console.log(y);