
/* function addToCart(){
    console.log("added");
}
function add(a,b){
    console.log(a+b);
}
add (10,20) */
/* //!functions without parameters
function demo(){
    console.log("functions without demo");
}
demo(); */

/* //!functions with parameters
function useDetails(name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);
}
useDetails("usha",20,"hyd"); */

/* //!anonymus function
function(){
    console.log("anonymus function");
} */

/* //!function expression
let x=function(){
    console.log("function expression");
};
x(); */

/* //!IIFE
(function(){
    console.log("IIFE");
})
(); */

//!arrow function
/* let x=()=>{
    console.log("Arrow function");
};
x(); */
/* let x=_=>
    console.log("Arrow function");
x(); */
/* let x=a=>
    console.log(a);

x(10); */
/* let x=(a,b)=>
    console.log(a+b);//10+undifinied=NaN

x(10); */
/* let x=_=>
    console.log("HI");
    console.log("Hello");
    console.log("why");
x(); */
//!{} if not used then it will print but not in order
/* let x=_=>{
    console.log("HI");
    console.log("Hello");
    console.log("why");
}
x(); */

/* //!return function
function test(a,b){
    console.log("hi");
    console.log("hhvj");//explicit return
    return a+b;
    console.log("hello");
}
let x=test(10,12);
console.log(x);

let y=(a,b)=>a+b;//implicit return
let z=y(10,20);
console.log(z);

let p=(a,b)=>{return a+b};//explicit return
let q=p(90,20);
console.log(q); */


//!Higher order function
/* function hof(a){
    return a;
}
let m=hof("usha");
let n=hof(true);
let w=hof(function(){return "hello i am a call back function"});
console.log(m);
console.log(n);
console.log(w); */
/* function hof(a){
    return a;
}
let w=hof(function(a,b){return a+b});
console.log(w);
 */
/* //!callback function
function parent(callback){
    return callback; 
}
let x=parent(add(5,5));
console.log(x);

function add(a,b){
    return a+b; 
}
/* console.log(add(5,5)); */
/* let a=10;
let b="sai";
function x(){
    var user="usha";
    let company="MNC";
    const sal=50000;
    console.log(company);
    console.log(user);
    console.log(sal);
    console.log(a,b);
};
x(); */
function x(){
    let a=10;
    let b=20;
    console.log(a,b);
    function y(){
        let p="Usha";
        var q="Reddy";
        console.log(p,q);
        function z(){
            const username="sai";
            console.log(username);
            console.log(a);
            console.log(q);


        }
        z();
    }
    y();
}
x();
