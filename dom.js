// // const p = document.getElementById("demo");

// // p.innerHTML = "test 0" ; //dom method


// const x = document.forms["frm1"];
// console.dir(x);
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += text + x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// 'const element = document.getElementById('demo');

// element.innerHTML = `Today's date is: ${Date()} `';

// function validateForm(){
//      const form = document.forms['myForm']

//      const value = form['fname'].value;

//      if(value === '')
//      alert("You must type name");



//      return false;
// }



// const p = document.querySelector('#demo');
// p.style.color = 'red';
// p.style.fontsize ="30px";



function myMove(){
    const animate = document.getElementById("animate");
    let pos = 0;

   const interval = setInterval(frame, 5);

    function frame(){
        if(pos < 350){
           pos++;
           animate.style.top = pos + 'px';
           animate.style.left = pos +'px'; 
        } else {
             clearInterval(interval);
        }
        
    }

}

// myMove();//js animation


function changeText(id){
    // const title = document.querySelector('#title');
    console.log(this);
    id.innerHTML ="Hello world";
//   title.innerHTML = "Hello world";
}


const button = document.querySelector("#button");

button.onclick = function() {
    console.log("Hello world")

}