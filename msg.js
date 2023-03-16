var a=10; //global variable


function msg(){
    alert("Hello Dost!!")
}

function f1(){
    document.write(a);
    window.value="imran";
    var v2= 30;
    document.write(v2);
    document.write(window.value);
    document.write(a);
}

function f2(){
    document.write(a);
    document.write(window.value);
    // document.write(v2);
}

function forinex1(){
const person ={fname:"Mhefuja", lname:"Imran", age:"22"}

let text="";
for(let x in person){
    text += person[x];
}

}


function mi(number){
    return number;

}
function mi2(number){
    alert(mi(number));
}


stu={rollno:01, st_name:"mefu",std:8};
document.write(stu.rollno + " " +stu.st_name+" "+ stu.st_name);

