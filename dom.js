// // const p = document.getElementById("demo");

// // p.innerHTML = "test 0" ; //dom method


// const x = document.forms["frm1"];
// console.dir(x);
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += text + x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


const element = document.getElementById('demo');

element.innerHTML = `Today's date is: ${Date()} `;