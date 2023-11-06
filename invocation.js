// function a (){

//     console.log(this);
// //    console.log("I am a function")

// }
// a();


const x = {
    a: function () {
        console.log(this);
    }
}

x.a();