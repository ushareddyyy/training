/* let userDetails={
	empid:"Sai",
	empname:18,
    empcompany:"HYD",
    empsalary:"Sai",
	empaddress:18,
    
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
let userDetailss=[{
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
} */
//!empid,empname,empcompany,empsalary,empaddress
let userDetails=[{
	empid:1,
	empname:"usha",
    empcompany:"amazon",
    empsalary:130000,
	empaddress:{
        emparea:"hyd",
        empcity:"xyz"
}},
    {
    empid:2,
    empname:"sai",
    empcompany:"wipro",
    empsalary:10000,
    empaddress:{
        emparea:"lakshmipuram",
        empcity:"xyz"
    }
},{
    empid:3,
    empname:"ram",
    empcompany:"IBM",
    empsalary:120000,
    empaddress:{
        emparea:"khm",
        empcity:"xyz"
        },
    }
]
console.log(userDetails);
console.log(userDetails.empname);
console.log(userDetails.empcompany);
console.log(userDetails.empsalary);
/* console.log(userDetails.empaddress.emparea);
console.log(userDetails.empaddress.empcity); */


userDetails.map((user)=>{
    store.innerHTML+=`
   <tr>
  <td>${user.empid} </td>
   <td>${user.empname} </td>
    <td>${user.empcompany} </td>
    <td>${user.empsalary} </td>
    <td>${user.empaddress.empcity} </td>
    <td>${user.empaddress.emparea} </td>
    </tr>`
})


