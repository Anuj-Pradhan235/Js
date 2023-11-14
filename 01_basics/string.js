const gameName=new String("Anuj-Subhash-Pradhan");
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("A"));
// the first argument is included and last is excluded
const newString=gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(0,4);
// can use negative in the slice
const newStringOne="  Anuj   ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://Anuj.com/Anuj%20Pradhan";
console.log(url.replace("%20","-"));
console.log(url.includes("Anuj"));
console.log(url.includes("Pr"));
console.log(gameName.split('-'));


