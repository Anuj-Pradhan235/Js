// data type
// primitive : String,Number,BigInt,Boolean,null,undefined,Symbol 
//non-primitive: Array ,Objects, Functions
let currDayTem=null;
console.log(Number(currDayTem));
const id=Symbol('123');
const anotherId=Symbol('123');//return value that we got is not same
console.log(id===anotherId);

const bigNumber=99n;
console.log(bigNumber);
// Refernce (non-primitive)
//Array Objects Functions : -- mostly the datatype is the object
const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Anuj",
    age:21
}
const myFunction =function (){
    console.log("Hello World!");
}
console.log(typeof(myFunction))
console.log(typeof bigNumber)
console.log(typeof heros);
console.log(typeof anotherId)
