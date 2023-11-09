const para = document.createElement("p");

const node = document.createTextNode("Hello world");

para.appendChild(node);//<p>Hello world </p>

const element = document.getElementById("div1");
const p1 = document.getElementById("p1");

element.insertBefore(para, p1);