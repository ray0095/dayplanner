var currentDay = moment();
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do"));

//hour block values
var hour9 = moment("09:00:00", "HH:mm").format("hh A");
$("#hour9").text(hour9);
var hour10 = moment("10:00:00", "HH:mm").format("hh A");
$("#hour10").text(hour10);
var hour11 = moment("11:00:00", "HH:mm").format("hh A");
$("#hour11").text(hour11);
var hour12 = moment("12:00:00", "HH:mm").format("hh A");
$("#hour12").text(hour12);
var hour13 = moment("13:00:00", "HH:mm").format("hh A");
$("#hour13").text(hour13);
var hour14 = moment("14:00:00", "HH:mm").format("hh A");
$("#hour14").text(hour14);
var hour15 = moment("15:00:00", "HH:mm").format("hh A");
$("#hour15").text(hour15);
var hour16 = moment("16:00:00", "HH:mm").format("hh A");
$("#hour16").text(hour16);


// function timeColor() {
//   var currentHour = moment().format('hh A');
//   console.log(currentHour);
  
// }



var taskList = document.getElementById("task");
var saveBtn = document.getElementById("saveBtn");
var taskList2 = document.getElementById("task2");
var saveBtn2 = document.getElementById("saveBtn2");

//9 oclock hour
function saveTaskList1() {
    var task1 = taskList.value.trim()
   
    localStorage.setItem("tasks", task1);
}
  
  function renderTaskList1() {
    var pastTaskList = localStorage.getItem("tasks");
    taskList.textContent = pastTaskList;
  }
  
  saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  saveTaskList1();
  renderTaskList1();
  });

  //10 oclock hour
  function saveTaskList2() {
    var task2 = taskList.value.trim()
   
    localStorage.setItem("tasks2", task2);
}
  
  function renderTaskList2() {
    var pastTaskList = localStorage.getItem("tasks2");
    taskList2.textContent = pastTaskList;
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
  