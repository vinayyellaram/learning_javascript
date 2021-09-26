//Use quokka js extension to see output
//faster/easier way to access/unpack variables from arrays , objects

const fruits = ["orange", "apple", "mango", "grape"];
const friends = [
  { name: "bob" },
  { name: "jhon" },
  { name: "keli" },
  { name: "bil" },
  { name: "bobby" },
];

const fruit1 = fruits[0];
const fruit2 = fruits[2];
const fruit3 = fruits[3];

console.log(fruit1, fruit2, fruit3);

const [a, b, c, d, e, f, g] = friends;

console.log(a, b, c, d, f, g);

let first = "bob";
let second = "jhon";

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];
console.log(first, second);

const family = {
  firstx: "bob",
  last: "junior",
  city: "siliconvalley",
  siblings: { sister: "anny" },
};

const { last, firstx, city } = family;
console.log(last, firstx, city);

function printPerson({ firstx, last, siblings: { sister } }) {
  //   const {
  //     firstx,
  //     last,
  //     siblings: { sister },
  //   } = family;
  console.log(firstx, last, sister);
}
printPerson(family);
