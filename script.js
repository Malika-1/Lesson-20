// let name = 'Джон'

// admin = name 

// console.log(name)

let lorem = 'Lorem ipsum dolok sit, amet consectetur adipisicing elit. Accusamus culpa laborum error explicabo, eveniet fugit'

let m = lorem[lorem.indexOf ('m')];
let a = lorem[lorem.indexOf ('a')];
let l = lorem[lorem.indexOf ('l')];
let i = lorem[lorem.indexOf ('i')];
let k = lorem[lorem.indexOf ('k')];

console.log(m.toUpperCase() + a + l + i + k + a);
let username = 'aaa@bbb@ccc'
console.log(username.split('@').join('!'));


let str = 'HELLO WORLD';
let str2 = str.slice(0, 1).toUpperCase()  + str.slice(1).toLowerCase();
console.log(str2);

let html = 'Hello, it is HTML'
console.log(html.split('HTML').join('not JS'));

let name = 'alex'
console.log(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());

let number = Math.random();
let u = number.toString();
console.log(u.split('.').join(''));

let text = 'Lex Luter has a big suit'
let w = text.indexOf('a');
let h = text.indexOf('l');
let e = text.indexOf('e');
let x = text.indexOf('x');
console.log('a'.toUpperCase() + 'l' + 'e' + 'x');