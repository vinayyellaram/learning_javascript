//Unique values

const menu = [
    {
        name: "maggi",
        category: "nasta",
    },

    {
        name: "chai",
        category: "nasta",
    },
    {
        name: "dal",
        category: "main_course",
    },
    {
        name: "rice",
        category: "main_course",
    },
    {
        name: "curry",
        category: "main_course",
    },
    {
        name: "cookies",
        category: "nasta",
    },
];

const category = menu.map((item) => item.category);
console.log(category)


const category2 = ['all', ...new Set(menu.map((item) => item.category))];
console.log(category2)
const result = document.querySelector('.result')
result.innerHTML = category2.map((item) => {
    return `<button>${item}</button>`
}).join('')

