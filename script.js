var currentDay = moment();
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do"));
var currentTime = moment();


var taskList = document.getElementById("task");
var saveBtn = document.getElementById("saveBtn");
var priority = document.getElementById("priority");

 saveTaskList = () => {
    var taskListItems = {
        priorityLevel: priority.value,
        taskListItem: taskList.value.trim()
    };

    localStorage.setItem("taskListItems", JSON.stringify(taskListItems));
}

saveBtn.addEventListener("click", function(e) {
    e.preventDefault();
    saveTaskList();
    renderTaskList();
});

function renderTaskList () {
     var allTasks = JSON.parse(localStorage.getItem("taskListItems"));
    
    if (allTasks !== null) {
        taskList.innerHTML = allTasks;
        } else {
        return;
    }
 }


init = () => {
     renderTaskList();
 }

 init ();