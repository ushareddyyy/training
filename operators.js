console.log(10+10);//20
console.log("10"+10);//1010
console.log(10+10+"Hi");//20Hi
console.log("Hi"+10+10);//Hi1010
console.log("Hi"+(10+10));//Hi20

console.log(10-10);//0
console.log("10"-10);//typecasting
console.log("10"-"Hi");//NaN
console.log("10"-"10");//Hi1010

console.log(5*5);
console.log("5"+5);//typecasting

console.log(10/2);//5
console.log("10"/2);//typecasting

console.log(10%2);//0
console.log("10"%2);//typecasting

console.log(2**3);//8
console.log("2"**3);//typecasting

let a=10;
console.log(a++);//10
console.log(a);//11

let b=20;
console.log(++b);//21

let c=10;
console.log(--c);//9

let d=20;
console.log(d--);//20
console.log(d);//19

/* let g=10;
console.log(a+5);//15
console.log(a + 5);//15 */

let g=10;
console.log(a+=5);//15
console.log(a+=5);//20
console.log(a-=5);//15
console.log(a*=2);//30
console.log(a/=5);//6
console.log(a**=2);//36

console.log(10==10);
console.log("Hi"="Hi");
console.log("10"==10);//true
console.log("10"===10);//false

console.log(10!=10);
console.log("10"!=10);//true
console.log("10"!==10);//false

console.log(10>10);//false
console.log(10<10);//false
console.log(10>=10);//true
console.log(10<=10);//true

console.log(true && true);//true
console.log(false && true);//false
console.log(true && false);//false
console.log(false && false);//false

console.log(true || true);//true
console.log(false || true);//true
console.log(true || false);//true
console.log(false || false);//false

console.log( !true);//false
console.log( !false);//true