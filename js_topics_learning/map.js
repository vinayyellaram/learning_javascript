console.log("hello");

const pepole = [
    {
        name: "lala",
        age: 20,
        gender: "female",
    },
    {
        name: "joey",
        age: 24,
        gender: "male",
    },
    {
        name: "andrew",
        age: 35,
        gender: "male",
    },
    {
        name: "blake",
        age: 23,
        gender: "male",
    },
];

const ages = pepole.map((person) => person.age * 2);

console.log(ages);

const newPeople = pepole.map((item) => {
    return {
        firstName: item.name,
        age: item.age
    }
})

console.log(newPeople)

const name = pepole.map((person) => `<h2>${person.name}</h2>`)
const result = document.querySelector('.result')
console.log(result)
result.innerHTML = name.join('');