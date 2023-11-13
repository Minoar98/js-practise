


function display(some) {
   
  }
  
  function calculator(num1, num2, callback) {
    let sum = num1 + num2;

   if (callback) callback(sum)

  
  }
  
 const result = calculator(5, 5, display);
 console.log(result);


console.log('line 1 code')


 setInterval(function(){
     console.log('Line 2 code');

 },2000 );


console.log('Line 3 code');



const paymentSuccess = true;
const marks = 70;

function enroll (callback){
  console.log('Course enrollment is in process')
  setTimeout(function() {
     if(paymentSuccess) {
      callback ()
     } else {
       console.log('Payment failed')
     }

  } , 2000)
}

function enroll(callback){

}

function progress(callback) {
console.log('Course on progress......')

  setTimeout(function(){
    if(marks >= 80){
       callback()
    } else {
      console.log ('You could not get enough mark to get at certificate')

    }
  }, 3000)
}

function getCertificate() {
  console.log('Preparing your certificate');

  setTimeout (function(){
    console.log('Congrats! You got the certificate');
  })
}


enroll(function(){
  progress(getCertificate);
});













