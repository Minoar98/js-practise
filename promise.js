
const status = false ;
console.log('Task 1');


const promise = new Promise(function(Tamim, react){

});
setTimeout(function(){
    if(status) {
        tamim("Task 2");
    } else {
         react('failed');
    }
} , 2000);

promise
  .then(function(value){
    console.log(value);
  })
  .catch(function(err){

console.log('err');
})