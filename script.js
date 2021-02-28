var currentDay = moment();
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do"));

var taskList = $("#task");
var saveBtn = $("#saveBtn");
var priority = $("#priority");

 saveTaskList = () => {
    var taskListItems = {
        priority: priority.value,
        taskList: taskList.value.trim()
    };

    localStorage.setItem("taskListItems", JSON.stringify(taskListItems));
}

// function renderTaskList () {
//     var allTasks = JSON.parse(localStorage.getItem("taskListItems"));
    
//     if (allTasks !== null) {
//         taskList.innerHTML = allTasks;
//     } else {
//         return;
//     }
// }

saveBtn.addEventListener("click", function(e) {
     e.preventDefault();
     saveTaskList();
//     renderTaskList();
});

// init = () => {
//     renderTaskList();
// }

// init ();