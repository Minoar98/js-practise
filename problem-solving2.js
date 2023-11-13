

// const matches = sentence.match(/sumit/gi);
// const occurances = matches ? matches.length : 0;

// console.log (matches);

// 


// function linearSearch (arr, val){
//     const length =arr.length;

//     for (let i = 0; i < arr.length; i++){
//         if(arr [i] === val) {
//             return i ;
//         }
//     }
//     return 'not found!'
// }

// console.log(linearSearch(['a', 'b', 'c']));

// f


function fizBuzz(number){
    for(let i = 1; i <= number; i++) {
        if(i % 15 === 0) {
            console.log(`${1} is FizzBuzz`);
        }  else if(i % 3 === 0){
            console.log(`${i} is Fizz`);
        }  else if(i % 5 === 0) {
            console.log(`${i} is Buzz`);
        }  else {
            console.log(i);
        }
    }          
         
}
fizBuzz(100);


// const trueArray = mixedArr.filter(function(el){

//       if(el) {
//          return true;
//       } else {
//           return false;
//       }

// });  

// const trueArray = mixedArr.filter(Boolean);
// console.log(trueArray);


const truthyObject = function(obj) {
    for(let i in obj){
        if(!obj[i]) {
            delete obj [i];
        }
    }
    return obj;
}
console.log(truthyObject(obj));