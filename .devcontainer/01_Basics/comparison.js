/*Durring Comparison datatypes must be same 
because sometimes, comparison between datatypes 
doesnot give correct/desired output.
/Avoid the Following.*/
console.log("2" >= 2);
console.log("02" > 1)
console.log(null > 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null < 0);
console.log(null == 0);
console.log("....................................");
//Incase of undefined.
//every comparison give sthe same result.
console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log("....................................");
//Strict Check (===)
console.log("2" === 2);