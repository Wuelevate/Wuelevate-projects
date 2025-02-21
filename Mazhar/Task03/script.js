// Variables

//----------------- var -- Global scoped --------------------- 

// var n = 8;
// console.log(n)

// var n = 9;
// console.log(n) // reassigning is allowed

// ------------------let ----------------------
// introduced in ES6. 
// Block scope
//cannot be redeclared in the same scope

// let price = 10;
// price = 20;     // value can be updated
// let price = 15       //cnanot be redeclared
// console.log(price)

// ----------------const -------------------
//  cannot be reassigned
//block scoped

//const a = 10;
//const a = 20;       //This will throw an error

//console.log(a)


// ------------ Datatypes -------------------------
//01.-- Primitive datatype

// Number (integr, decimal)

// let n = 10;
// let pi = 3.14
// console.log(n)
// console.log(pi)

//------------------- String -----------------

// let name = "hello, mazhar"
// console.log(name)

//------------------- Boolean--------------------

// let bool1 = true;
// let bool2 = false;
// console.log(bool1)
// console.log(bool2)

// ---------- Object ---------------------

// let obj = {
//     name: "mazhar",
//     course: "B.Tech CSE"
// }
// console.log(obj)

//---------------------Array -----------------------

// let a = ["red", "green", "black"]
// console.log(a)



//------------Operator------------------------------

// let sum = 2+5;
// let sub = 8-2;
// let mult = 5*2;
// let div = 8/2;

// console.log(sum, sub, mult, div)  // 7 6 10 4 


//------------ comparsion------------------------

// 1. Equality(==)

// console.log(10 == 10)         // true
// console.log(10 == 5)         // false
// console.log(10 == "10")     // true

//----- 2. Strict Equality(===)-------
// console.log(5 === 5)        //true
// console.log(5 === '5')     // false
// console.log(5 === 6)        //false


//-----3. Inequality(!=) ---------

// console.log(5 != 10)    // true
// console.log(5 != 5)     //false
// console.log(5 != '5')   // false

//------4. Greater than(>) ------------

// console.log(10 > 2)     //true
// console.log(10 > 10)    //false
// console.log(5 > 10)     //false

// -----5. Greater than or Equal to(>=)-----------

// console.log(10 >= 10)       //true
// console.log(10 >= 5)        //true
// console.log(2 >= 5)         //false

//------6. Less than(<)--------------

// console.log(10 < 11)        //true
// console.log(12 < 11)         // flase
// console.log(10 < '10')      // false

//---- 7.Less Than or Equal To (<=)------

// console.log(10 <= 10);          //true
// console.log(10 <= 15);      //true
// console.log(15 <= 10);      //false

//------------ 8. comparing NaN -------------

// console.log(NaN == NaN)     //false
// console.log(NaN === NaN)        //false

//----------------- Logical Operator-----------------

//----------------1. logical AND(&&)-----------
// console.log(5>3 && 10<20);      //true
// console.log(true  && true);        //true
// console.log(true  && false);        //false
// console.log(false  && true);        //false

//------------- 2. logical OR( || )

// console.log(true || false);        //true
// console.log(false || true);     //true
// console.log(false || false);    //false
// console.log(10 > 6 || 6 < 5);   //true

//-----------3. logical NOT (!)

// console.log(!true);     //false
// console.log(!false);    //true
// console.log(!(5>20));   //true
// console.log(!(50>20));  //false


//------------Assignment operator -------------

// ---------1. simple assignment(=)-------------

// let x = 23;
// console.log(x) // 23

//  ---------- Addition assignment(+=)

// let x = 10;
//  x += 4 ;         //x = x + 4
// console.log(x)       //14

//---------- substraction assignment(-=)------------

// let x = 20;
// x -= 5      // x= x-5
// console.log(x)  //15


// ---------------- FUnction--------------

// Function declaration
//Function declarations are defined using the function keyword. They are hoisted, meaning they can be called before they are defined in the code.



// function add(a, b) {
//     return a + b;
// }

// const result = add( 2, 10);
// console.log(`the sum of a, b = `,  result)      // 12


// -----------Arrow function ---------
//Arrow functions are a concise way to write functions introduced in ES6. They use the => syntax and are not hoisted.




// const multiple = (a,b) => {
//     return a*b;
// }

// const result = multiple( 5,4)
// console.log(result)                 //20


//--------------------Loops------------------

//-------------1. for loop----------------

// for(let i=0; i<5; i++){
//     console.log(i)
// }


// ------------------ while loop--------------------
// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }


//---- do while loop----------------
// let i = 0;
// do{
//     console.log(i);
//     i++;
// } 
// while(i<5);


// ------------ for in loop----------

// const person = {name:"maaz", age:22, job: "devolper"};

// for (let key in person){
//     console.log( `${key} : ${person[key]}`);
//}

//output
// name : maaz
// age : 22
// job : devolper


//-------------for of-----------------
// const fruits = ['apple', 'banana', 'mango']
// for (let fruit of fruits) {
//     console.log(fruit)
// }

// ---------------- conditional statement--------------

//---------------- if statement ---------------

// const age = 18;
// if(age >= 18) {
//     console.log('You are an adult. ')
// }
// Output: You are an adult.


//-------------------- if else --------------

// const age = 15;
// if(age >=18) {
//     console.log('You are an adult. ')
// } else {
//     console.log("You are a minor")
// }

// Output: You are a minor.


// ---------- if else if else statement -------------

// const score = 85;
// if(score >= 90){
//     console.log('Grade: A')
// } else if(score >=85){
//     console.log('Grade : B')
// }else if(score >=70){
//     console.log('Grade : ')
// }else{
//     console.log('Grade : F')
// }

// output: B


// -------------- Ternary operator(? :)
//The ternary operator is a shorthand for the if...else statement. It evaluates a condition and returns one of two values.

// const age = 20;
// const status = age >= 18 ? "Adult" : "Minor";

// console.log(status)
 // Output: Adult


// ---------- Switch statement ------------

// const day = "Monday"

// switch (day) {
//     case "Monday":
//     console.log("Start of the workweek");
//     break;
//     case "Froday":
//     console.log("End of the workweek");
//     break;
//     default:
//     console.log("Its a regular day");
// }
// Output: Start of the workweek.



