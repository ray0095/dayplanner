var currentDay = moment(); //Grabs current date prints to page
$("#currentDay").text(currentDay.format(" [Today is ] dddd, MMM Do"));
var currentHour = moment().format('HH');//Grabs current hour
var currentInt = parseInt(currentHour); //Changes current hour to an integer

//Loop to change row color based on time
  function changeColor() {
    $('.timeValue').each(function(index,item){ 
      blockValue = parseInt($(item).data('index'));
      if(blockValue === currentInt){
          $(item).addClass('present');
      } else if (blockValue < currentInt) {
        $(item).addClass('past');
      } else {
        $(item).addClass('future');
      }
    });

};
changeColor();//runs change color function

//Checks time every second and reruns changeColor function
var reRun = window.setInterval(function(){
  changeColor();
}, 1000);

//get and render user input from local storage 
$(document).ready(function(){
  $('.taskBox').each(function(){    
      var id = $(this).attr('id');
      var value = localStorage.getItem(id);
      $(this).val(value);
  }); 
});

//save user input to local storage
$('.btn').on('click', function(){
  $('.taskBox').each(function(){    
      var id = $(this).attr('id');
      var value = $(this).val();
      localStorage.setItem(id, value);
  });   
});

//clear all tasks button
$('#clearBtn').on('click', function(){
  $('.taskBox').each(function(){
      $('.taskBox').val('');    
      var id = $(this).attr('id');
      var value = $(this).val();
      localStorage.setItem(id, value);
  });   
});