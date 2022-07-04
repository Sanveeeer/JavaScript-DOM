//Query Selector

let x;

x = document.querySelector("h1").textContent;
console.log(x);

x = document.querySelector("#Hero").textContent;
console.log(x);

x = document.querySelector("ol > li").textContent;
console.log(x);

x = document.querySelector("p").textContent = "Changed the paragraph";
console.log(x);



