(function (){
    //code
    console.log("I am a"); // self invokations
}

)(); //self invoking function -> IIFE


// function myFunction(a, b) {
//     // return a * b;
//     // return undefined
//     console.log("hello")
//   }



//   console.dir(typeof myFunction);


// const a = {
//     firstName: 'Minaor' ,
//     sleep :function(){

//     }
// }

const object = {
    a: 5,
    b: () => {
        console.log(this.a)
    }
}


const x = (x, y) => {
    console.log();
    return x * y ;
}

