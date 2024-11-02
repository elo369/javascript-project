function addTask() {
    var taskInput = document.querySelector("#taskInput")
    var taskList =document.querySelector("#taskList")

    if (taskInput.value !=="") {
        var li = document.createElement("li")
        li.innerHTML=taskInput.value +' <input type="checkbox">' + '<button class="delete-btn" onclick= "deletes(this)">Delete</button>'
        li.style.backgroundColor = "#45a049";
        li.style.borderRadius = "4px"
        taskList.appendChild(li)
        taskInput.value =""
    }
}

function deletes(button) {
    var li = button.parentNode
    li.parentNode.removeChild(li)
}

