if(true){
    console.log("executes if");
}
if(false){
    console.log("executes else");
}
//if else

let age=20;
if(age>18){
   console.log("eligible for voting");
}
else{
    console.log("not eligible for voting");
}

//if else ladder

    let marks=prompt("Enter marks ");
    if(marks>=90 && marks<=100){
       console.log("gade is A");
    }
    else if(marks>=80 && marks<90){
        console.log("gade is B");
    }
    else if(marks>=70 && marks<80){
        console.log("gade is C");
    }
    else if(marks>=60 && marks<70){
        console.log("gade is D");
    }
    else if(marks>=50 && marks<60){
        console.log("gade is E");
    }
    else{
        console.log("fail");
    }

    let day = prompt("Enter day");

    switch(day) {
        case '1':
            console.log("Sun");
            break;
        case '2':
            console.log("Mon");
            break;
        case '3':
            console.log("Tue");
            break;
        case '4':
            console.log("Wed");
            break;
        case '5':
            console.log("Thu");
            break;
        case '6':
            console.log("Fri");
            break;
        case '7':
            console.log("Sat");
            break;
        default:
            console.log("Invalid day");
    }
    



