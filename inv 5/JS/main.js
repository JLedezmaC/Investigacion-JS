
/* METODO 1*/

/*let newnode = document.createElement('li');

let miElemento = document.getElementById('childElement').parentNode;

let son = document.getElementById('childElement');

let fin = miElemento.ChildNode.after(newnode, son);

console.log(newnode);
console.log(miElemento);
console.log(son);
console.log(fin);  */

/* METODO 2 */ 
let miElemento = document.getElementById('elemento1');
let p = document.createElement("p");
p.innerHTML = 'Fries and potatoes';

let prueba = miElemento.after(p);

console.log(prueba);