//number.
let score = 30
console.log(typeof(score));
console.log("........................................");
//string contain number.
let x= "50";
let convertToNum = Number(x);
console.log(typeof convertToNum);
console.log(convertToNum);
console.log("........................................");
//String contain numbers and alphabets.
let z = "54Harry"
let valToNum = Number(z)
console.log(typeof valToNum);//Number  //confusion of dataType Conversion
console.log(valToNum); //NaN        //confusion of dataType Conversion
console.log("........................................");
// null
let R = null;
let q = Number(R);
console.log(typeof q); // number
console.log(q);        // 0
console.log("........................................");

//undefined
let a = undefined
let c = Number(a)
console.log(typeof c);//Number  //confusion of dataType Conversion
console.log(c); //NaN
console.log("........................................");
//boolean conversion
//1 to Boolean
let f = 1;
let o = Boolean(f)
console.log(typeof o)
console.log(o)//True
//String to Boolean
let name = "Harry"
let bool = Boolean(name)
let strToBool = Boolean(bool)
console.log(typeof strToBool)
console.log(typeof bool)
console.log(bool)
console.log(strToBool);
//zero to Boolean
let m = 0;
let n = Boolean(m)
console.log(typeof n)
console.log(n)//False
//Empty to Boolean
let emp = "";
console.log(typeof emp);
let emp_Bool = Boolean(emp)
console.log(typeof emp_Bool)
console.log(typeof emp);
