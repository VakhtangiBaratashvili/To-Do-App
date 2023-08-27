"use strict";

const input = document.querySelector("#input");
const addButton = document.querySelector("#add");
const todoList = document.querySelector(".todoList");
const pendingTasks = document.querySelector("#pendingTasks");
const clearButton = document.querySelector("#clear");

addButton.addEventListener("click", addToDo);

function addToDo() {
    if (input.value !== "") {
        const newToDoText = input.value;

        const listItem = document.createElement("li");
        listItem.innerText = newToDoText;

        const deleteIcon = document.createElement("span");
        deleteIcon.className = "icon";
        deleteIcon.innerText = "Delete";
        deleteIcon.addEventListener("click", () => {
            listItem.remove();
            updatePendingTasksCount();
        });

        listItem.appendChild(deleteIcon);

        todoList.appendChild(listItem);

        input.value = "";

        updatePendingTasksCount();
    }
}

function updatePendingTasksCount() {
    const itemCount = todoList.children.length;
    pendingTasks.textContent = `You have ${itemCount} pending task${itemCount === 1 ? '' : 's'}`;
}

clearButton.addEventListener("click", () => {
    todoList.innerHTML = ""; // Clear the list
    updatePendingTasksCount(); // Update the pending tasks count
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addToDo();
    }
})

