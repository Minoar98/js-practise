(function (){
    //code
    console.log("I am a"); // self invokations
}

)(); //self invoking function -> IIFE


function myFunction(a, b) {
    // return a * b;
    console.log("hello")
  }

  const result = myFunction(3, 4);

  console.log(result);