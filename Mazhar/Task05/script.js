//  --------- Destructuring -------------------
//Destructuring in JavaScript is used for simplifying code and making it more readable and concise. It allows you to extract values from arrays or properties from objects into distinct variables in a clean and efficient way

//----------------------Destructuring Function Parameters ----------------

let arr = [5,8,2,1,3,4,6,]

//---------------- basic syntax-----------
let [a, b, c] = arr;
console.log(a,b,c)          //5 8 2

//------------- rest parameter ---------

let [a, b,c,d, ...rest] = arr
console.log(a,b,c,d)                // 5 8 2 1 
console.log(a,b,c,d,...rest)       //5 8 2 1 3 4 6         

//-------------------- Skipping elements---------------------

let [a, , ,...rest] = arr
console.log(a,rest)         //5 [ 1, 3, 4, 6 ] in this b , d value cannot be print other reamining value can print.
  
let {a, b} = {a: 1, b:2}
console.log(a,b)            // 1 2

// ----------------- Default value --------------------

const numbers = [1];
const [a,b = 10, c=15] = numbers;
console.log(a,b,c)                  //1 10 15

//-------------- Swapping variables---------

let a = 5;
let b = 10;
[a,b] =[b,a];

console.log(a,b)        // 10 5


//----------------  Destructuring Objects --------

const person = {
    name: 'jack',
    age: 25,
    address: 'delhi'
}

console.log({...person, name:'jacky', age:28})

// -------------  Higher Order Function  --------------------

// -----------  Map functon ------------------

//example - 01
let cities = ["DL", "MB", "NY", "NA"]
let lowerCities = cities.map((city) => city.toLocaleLowerCase())
console.log(lowerCities)        //[ 'dl', 'mb', 'ny', 'na' ]

// example 02
let words = ['animals', 'birds', 'insect'];
let countLength = words.map(word => word.length);
console.log(countLength);               //[ 7, 5, 6 ]

// ------------- Filter ------------------------
 
var people = [
    {name: "arun", age: 30},
    {name: "salman", age: 50},
    {name: "karan", age: 20},
    {name: "viru", age: 10},
]

let filteredList = people.filter(person => person.age>25 );
console.log(filteredList)           // { name: 'arun', age: 30 }, { name: 'salman', age: 50 } ]


// ---------------- reduce -----------------

let sum = people.reduce((total, person) => total+person.age,0)
console.log(sum)        //110


