//primitive---call by value
//7types--- string,number ,boolean,null,symbol,BigInt,
//undefined ,Symbol
const score = 100
const scorevalue =100.5//no diifreent for decimals
const isloggedin =false
const outsidetemp=null//abhi uske ander koi temot nhi hai

//null ka type of   --object aata hai

let useremail;//undefined ....or u can write    let useremail =undefined;
const  id =Symbol('4234')//both are not same cause we use 
//symbol here
const anotherid=Symbol('4234')//even eafter having same values 
//they dont return same value 
console.log(id==anotherid)//false
const bigNumber = 57657657567674753657547n//bigint
//symbol convert same things to differnt unique things 

console.log(typeof bigNumber)



//refrence(non primitive)-- call by refrence
//array, objects,functions

//def of function -- function(){}
//function ka type of object function aata hai....

const myfunction = function(){
    console.log("hello world")

}

 