//Selectors
const todo_input = document.querySelector(".todo_input");
const todo_button = document.querySelector(".todo_button");
const todo_lists = document.querySelector(".todo_lists");
const filter_todo = document.querySelector(".filter_todo");

//Event Listener
todo_button.addEventListener("click", addTodo);
todo_lists.addEventListener("click", deletecheck);
filter_todo.addEventListener("click", filtertodo);

function addTodo() {
    event.preventDefault();
   
    //Todo div
    const todo_div = document.createElement("div");
    todo_div.classList.add("todo");

    //Todo list
    const todo_new = document.createElement("li");
    todo_new.innerText = todo_input.value;
    todo_new.classList.add("todo_item");

    //appending list todo_div
    todo_div.appendChild(todo_new);

    ///Add todo to local storage
    saveLoacalTodo(todo_input.value);

    //Check mark button
    const complete_button = document.createElement("button");
    complete_button.innerHTML = '<i class="fas fa-check"></i>';
    complete_button.classList.add("complete_button");

    ////appending check mark todo_div
    todo_div.appendChild(complete_button);

    //Check deleted button
    const delete_button = document.createElement("button");
    delete_button.innerHTML = '<i class="fas fa-trash"></i>';
    delete_button.classList.add("delete_button");

    ////appending check mark todo_div
    todo_div.appendChild(delete_button);
    // ////appending check mark tod0_lists
    todo_lists.appendChild(todo_div);

    todo_input.value = "";
}

function deletecheck(e) {
    var item = e.target;
    //Delte Todo
    if (item.classList[0] === "delete_button") {
        var todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    //Check todo
    if (item.classList[0] === "complete_button") {
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtertodo(e) {
    const todos = todo_lists.childNodes;
    todos.forEach(function (todo) {
        
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
function saveLoacalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodo() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
