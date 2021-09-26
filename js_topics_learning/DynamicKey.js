const result = document.querySelector('.result');
console.log(result)


//dot notation
const person = {
    name: 'jhon'
}
console.log(person.name)
person.age = 25;
console.log(person);
//square bracket notation
const items = {
    "featured-item": ['item1', 'item2']
}
console.log(items["featured-item"])

let appState = 'loading';
const keyName = 'key1'
const app = {
    [appState]: true
}
app[keyName] = 'apps'
console.log(app)

const state = {
    loading: true,
    name: '',
    job: ''
}

const updateState = (key, value) => {
    state[key] = value
}
updateState('name', 'jhon')
updateState('loading', false)
updateState('job', 'dad')

state

