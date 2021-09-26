//variables values can be changed 

var numn = 100;

var name1 = "jhon";

var switches = true;//BOOlean

var und = undefined; //Undefined value

var nonee = null;//Null
// let is same as var
let numn1 = 100;

let name2 = "jhon";

let switches1 = true;//BOOlean

let und1 = undefined; //Undefined value

let nonee1 = null;//Null

// constant value cannot be changed 

const numm3 = 100;

console.log(numn, name1);
console.log("Hello world");


// Creating functions  > previous version of creating functions

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(1, 10);

function toUpper(text) {
    const uppercased = text.toUpperCase(text);
    console.log(uppercased);
}

toUpper(name2);
toUpper("this is in lower")

// ES5

const subtract = function (num1, num2) {
    console.log(num1 - num2);
}

subtract(10, 100);

// modern version  ES6
const multi = (num1, num2) => {
    console.log(num1 * num2);
}
///or  const multi = (num1,num2) => console.log(num1*num2);

multi(10, 203);


// String concatenation 

console.log('hello ny name is' + 'jake');
console.log('hello it\'s me');

console.log(`Hello it's me ${name1}`);

//Operators
// and => && 
// or => ||
//  not => !
/// conditional statements
// if else statements
const age = 200;

if (age < 20) {
    console.log("True");
}
else if (age < 10) {
    console.log("False")
}
else {
    console.log("Flase");
}

// Arrays

const data = ['cat', ' ball ', ' 23543'];
console.log(data);
const indexvalue = data.indexOf(data[0]);
console.log(`index of ${data[0]} is ${data.indexOf(data[0])}`);
console.log(data[1]);
console.log(data[2]);

// element push
data.push('hat');
console.log(`${data} '=> pop adds element'`);
// element pop
data.pop("hat");
console.log(`${data} pop removes element specified `);
// elemment shift 
data.shift();
console.log(`${data} shifting removes first element `);
// elemment unshift 
data.unshift('anaconda');
console.log(`${data} unshifting`);

/// Creating objects and using this keyword

const user = {
    name: 'Edwin',
    age: 30,
    sex: 'male',
    ///using this keyword
    sayName: function () {
        console.log(this.name);
    }
};
user.sayName();

// Loops  For and While

let mylist = ["sub", "add", "martin", "joe", "edd", "dand"];
//for
for (mylist of mylist) {
    if (mylist === 'martin') {
        console.log(`Index of matin ${mylist.indexOf('martin')}`);
        break;
    }
}

let loading = 0;

//while
while (loading < 10) {
    console.log(`website is loading ${loading}`);
    loading++;
}

// The this Keyword
console.log(`This is o/p of this Keyboard ${this}`);


//The regular function refers to the window object
function sum() {
    var add = 2 + 2;
    console.log(`sum of two is ${add}`);
    console.log(`${this}`);
}
sum();

////////In  a method this refers to the owner object

const object = {
    name: "kenny",
    age: 20,
    sub: function () {
        var add = 7 + 2;
        console.log("The this Keyword:In  a method this refers to the owner  object");
        console.log(`sum of two is ${add}`);
        console.log(`${this}`);
        console.log(this);
        console.log(`this is a `, this.name);
    }
}
object.sub();
const a = object.name
a
