var currentDay = moment();
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do"));
var hour9 = moment("09:00:00", "HH:mm").format("hh A");
$("#hour9").text(hour9);
var hour10 = moment("10:00:00", "HH:mm").format("hh A");
$("#hour10").text(hour10);
var currentHour = moment().format('hh a');






var taskList = document.getElementById("task");
var saveBtn = document.getElementById("saveBtn");
var taskList2 = document.getElementById("task2");
var saveBtn2 = document.getElementById("saveBtn2");

//9 oclock hour
function saveTaskList1() {
    var tasks = {
      task: taskList.value.trim(),
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
  
  function renderTaskList1() {
    var pastTaskList = JSON.parse(localStorage.getItem("tasks"));
    if (pastTaskList !== null) {
    taskList.innerHTML = pastTaskList.task;
    } else {
      return;
    }
  }
  
  saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  saveTaskList1();
  renderTaskList1();
  });

  //10 oclock hour
  function saveTaskList2() {
    var tasks2 = {
      task: taskList2.value.trim(),
    };
    localStorage.setItem("tasks2", JSON.stringify(tasks2));
  }
 
  function renderTaskList2() {
    var pastTaskList = JSON.parse(localStorage.getItem("tasks2"));
    if (pastTaskList !== null) {
        document.getElementById("task2").innerHTML = pastTaskList.tasks2;
    } else {
      return;
    }
  }
  
  saveBtn2.addEventListener("click", function(event) {
  event.preventDefault();
  saveTaskList2();
  renderTaskList2();
  });
  



  
  function init() {
    renderTaskList1();
    renderTaskList2();
  }
  init();
  