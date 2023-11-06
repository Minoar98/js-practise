// function a (){

//     console.log(this);
// //    console.log("I am a function")

// }
// a();


// const x = {
//     a: function () {
//         console.log(this);
//     }
// }

// x.a();


function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }

  myFunction();
  new myFunction();
  myObject.myFunction();