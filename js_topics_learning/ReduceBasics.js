//Reduce
//iterates, callback function
//reduces to a single value - number,arrray ,object
//1st parameter ('acc') - total of all calcuations
//2st parameter ('curr') - iteration/value

const staff = [
  { name: "jhon", age: 22, position: "designer", salary: 100 },
  { name: "keli", age: 21, position: "marketing", salary: 200 },
  { name: "bob", age: 25, position: "developer", salary: 300 },
  { name: "bil", age: 28, position: "Boss", salary: 400 },
  { name: "bobby", age: 19, position: "intern", salary: 50 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(person.salary);
  total += person.salary;
  console.log(total);
  return total;
}, 5000);
console.log(dailyTotal);
