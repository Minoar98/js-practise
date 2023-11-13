

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }
//   console.log(getRandomNumber(1,6));

//   const students = ["Minoar", "Tamim", "Adib", "Nasir"];
//   console.log(students.sort());

//   const roll_numbers =[3, 5, 1, 6, 2, 30];
//   console.log(roll_numbers.sort(function(a, b){
//             return b- a;
//   }));

//   function isLeapYear (year){
//     if((year % 400 === 0 ) || ((year % 4 === 0) && (year % 100 !== 0))) {
//         console.log(`${year} is a leap year`);
//     } else {
//         console.log(`${year} is not a leap year`);

//     }

//   }
//   isLeapYear(2028);

//   const vowels = ["a", "e","i", "o", "u"< "A", "E", "I", "O", "U"];
//   function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from (sentence);
       
//     letters.forEach(function(value, index, array){
//        if (vowels.includes(value)){
//         count++;
//        }
//     });
//     return count;

//   }
//   console.log(countVowels ("I love Bangladesh"));



  // const numbers = [1, 4, 5, 5, 6, 8, 9, 10, 4];

  // const duplicates = numbers.filter(function(value, index, array) {
  //   return array.indexOf(value) === index
  // });
  // console.log (duplicates);



//   const mySet = new set ();

//   mySet.add("a");
//   mySet.add("b");
//   mySet.add("c");

// console.log(mySet);

// const letters = new Set(["a","b","c"]);

// // List all Elements
// let text = "";
// letters.forEach (function(value) {
//   text += value;
// })

// const persons = {
//   fname: 'Bangladesh',
//   lname: '',
// }



// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits);


// const person = {
//   fname: 'Bangladesh',
// }

// person['person']




// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);


// // List all entries
// let text = "";
// for (const x of fruits.entries()) {
//   text += x;
// }

// console.log(text);
// let a = "Bangladesh";
// let b = 71;
// let c = b + " " + a;
// console.log(c);



// function isArray(myArray){
// console.log(myArray.constructor.toString());
// }

// isArray([1, 2, 3]);

// console.log(typeof ( 100 + 23 ) );

// let a = 10.14162333 ;
// console.log(a.toPrecision(3));


// let a = {name: "Habul"};
// console.log(typeof a.toString ());


// let x = 12;
//   try { 
//     if(x == "")  throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5)  throw "too low";
//     if(x > 10)   throw {
//       message :"To hight",
//       name: "high error"
//     };
//   }
//   catch(err) {
//     console.log(err);
//   }

//   console.log("this is a test ");


//  var carName = "volvo";

// function A(a, b){
 
//   console.log(a + b);
// }
// A(4 , 5);

// x = 5;
// console.log (x);

// let x; 





// function A (){
//   x = 5;
//   console.log(x);
// }

// A();

// const carName = "volvo";


// function A (){

// }




// const person = {
//   // firstName: "John",
//   // lastName : "Doe",
//   // id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   },
//   getFullName: function(){
//     return this.fullName();
//   }
// };
// console.log(person.getFullName());


// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }


// let x = 0.1;
// let y = 0.2;
// let z = x + y 

// console.log(z);

// const  arr = [1, 2, 3];
// const length = arr.length;
// for (let i = 0; i < arr.length; i++){
//     console.log (i);


// }

// const person = {
//     name: 'Tanjil',
//      age:   22

// };

// person.country = 'Bangladesh';

// // console.log(person);

// // person.age = 21;

// let a = 'age';
// console.log(person.age);
// console.log(person[age]);


// const person = {
//    fname:" John",
//    lname:" Doe",
//    age: 25
// };
// delete person['age'];
// // person.country = 'Bangladesh';
// delete person.age;

// console.log(person);

// let txt = ''

// for (let x in person) {
//   //  txt = txt + person [x]
//    txt += person[x];
//   //  console.log(x);
// }

// console.log(txt);



// const myObj = {
//    name: "John",
//    age: 30,
//    cars: [
//      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//      {name:"BMW", models:["320", "X3", "X5"]},
//      {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// for (let i in myObj.cars) {
//      console.log(i);

// }



// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// person.age = 26 ;






// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };


// console.log(typeof JSON.stringify(person));

// for (let x in person) {
//   text += person[x]
//   console.log(x)
// }

// document.getElementById("demo").innerHTML = text;




// console.log(Object.values(person));


// const personArray = Object.values(person);
// for(x of personArray) {
//   console.log(x);
// }

// const person = {
//   name: "John",
//   today: new Date()
// };

// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   }
// };

// // Set an object property using a setter:
// person.lang = "bn";
// console.log(person);


// const a = function (){
//   console.log('I am sleeping now')
// }
// // function sleep () {

// // }0

// a();


// (function a () {
// console.log ("I ma a")
// })();


// function myFunction(a, b) {
//       //  return a * b;
//       // return undefined
//       console.log("hello")
// }
// const result = myFunction(3, 4);

// console.dir(typeof myFunction);




// const object = {
//   a: 5,
//   b: () => {
//     console.log(this.a);
//   }
// }

// This is a function constructor:
// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
// }



const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person1));