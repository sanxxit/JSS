/*
let naam="sanchit";
let age=11
let ismarried= false;
if(ismarried==true){
    console.log(naam +"is married");
}
else{
    console.log(naam +"is not married");

}
*/
//arrays---
//const prsonarray=["ram","shyam","priya"]
//const genederarray=["male","male","female"]


//aaray of objects--complex objects
//array of objects---
/*
const allusers=[
    {
        firstname:"ram",
        gender:"male"




    }, {
        firstname:"shyam",
        gender:"male",
        metadeta:{
            age:21,
            address:"fds"
        }
    

    },{
        firstname:"geeta",
        gender:"female"
    }
]
for(let i=0;i<allusers.length;i++) {
    if(allusers[i]["gender"]=="male"){
        console.log(allusers[i]["firstname"])
    }

}
*/
//functions--abstract  out logic in your progranm
//take raguments
//return value a s an output
//wmic cpu get NumberOfCores, NumberOfLogicalProcessors/Format:List
//act like an independent program sthat do somethinf give an input
//functions can take other functions a s input(callbacks)
//...😂😂


/*
function findsum(a,b){
    //do things with input and returmn an output..
    return a+b;
}
const value = findsum(56,99);//calling a function
console.log(value)
*/
/*let sum =0;
for(let i =0; i<1000000000000;i++){
    sum = sum +i;

}
console.log(sum);
*/
//let logicalProcessorCount = navigator.hardwareConcurrency;


//fnToCall
//function sum(num1,num2,fnToCall){
  //  let result = num1+num2;
    //return result;



//}
function calculateArithmetic(a, b, type) {


    }
function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
    
const value =calculateArithmetic(1,3,"minus");
console.log(value);
