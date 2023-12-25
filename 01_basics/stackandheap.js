
let myname="sanchit"
let anothername=myname
anothername="ramesh"



console.log(myname)//sanchit
console.log(anothername)//ramesh
//stack , 
/*
primitive
varible ka copy milta hai


*/

let user1={//user1 stored in heap
    email:"san@gmail.com",//stored in heap
    upi:"dfsgrt4354"//stored in heap

}
let user2=user1
user2.email="histesh@gamil.com"//value get chaneg in both
console.log(user1.email)
console.log(user2.email)

//heap
/*
non primitive
original valur ka refrence milta hai 
jo bhi chnage hoga vo refrence valur m hoga...

*/