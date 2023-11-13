function myFunction() {
    let a = 4;
    return a * a;
  }

  myFunction();

  // Initiate counter
let counter = 0;

// Function to increment counter
function add() {
   let counter = 0;
   counter += 1;
   return counter;
}

// Call add() 3 times
add();
add();
add();

console.log(counter);


// The counter should now be 3




function temporray() {
    let counter = 0;

   return function plus() {
        // counter += 1;
   counter = counter + 1;
   console.log ("hello");

    }

    
  }

const add = temporray (); // add is a function at the end
 
  console.dir(add);
  add ();
//   console.dir(add);
  add ();
//   console.dir(add);
//   add ();
