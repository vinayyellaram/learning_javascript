// Filter - return a new array,can manipulate the size of new array(unlike map),return based on condition
// Find - returns single instance (object),returns first match, if no match - undefined

const people = [
  { name: "bob", age: 25, position: "developer" },
  { name: "jhon", age: 22, position: "designer" },
  { name: "keli", age: 21, position: "marketing" },
  { name: "bil", age: 28, position: "Boss" },
  { name: "bobby", age: 19, position: "intern" },
];

const fruits = ["orange", "apple", "mango", "grape"];
//filter
const young = people.filter((person) => {
  //    if(person.age<22){
  //        return person
  //    }
  return person.age < 20;
});

young;

const developers = people.filter((person) => person.position == "developer");

developers;

//no match
const seniorDevs = people.filter((person) => {
  return person.position === "s";
});
seniorDevs;

//find

const fruit = fruits.find((item) => item === "apple");
fruit;

//no match
const old = people.find((people) => people.age > 35);
old;

//Find  = > multiple matcher - returns only first match

const randomPerson = people.find((people) => people.age > 20);
randomPerson;

const names = people.map((item) => {
  return { name: item.name };
});
names;

const newPeople = people.map((item) => {
  return {
    firstName: item.name,
    age: item.age,
  };
});
newPeople;
