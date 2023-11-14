const myArr=[1,2,3,4,5];
// console.log(myArr);
//push operation is used to insert the ele into the back
myArr.push(6);
myArr.push(7);
//pop operation is used to remove the ele from the back
myArr.pop();
// console.log(myArr);
//unshift is used to insert the ele into the front of the array
myArr.unshift(9);
// console.log(myArr);
//shift is used to remove the front ele from the ele
myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr=myArr.join();
//converts it into the string
// console.log(typeof newArr);
//slice and splice
console.log(`A: ${myArr}`);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log(`B: ${myArr}`);
const myn2=myArr.splice(1,3);
console.log(myn2);
console.log(`C: ${myArr}`);
