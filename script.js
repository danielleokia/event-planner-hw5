var dayJsObject = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").text(dayJsObject);
console.log(dayJsObject);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
$(".saveBtn").on("click", function(){
  var textValue = $(this).siblings(".description").val();
  var timeValue = $(this).parent().attr("id");

 localStorage.setItem(textValue, timeValue);

 function getItem(textValue){
 var savedItem = localStorage.getItem(textValue);
 } getItem();
})
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

 function taskTimeline() {
  dayjs().hour();
  var currentTime = dayjs().hour();
  console.log(currentTime);
  $(".time-block").each(function() {
   var time= parseInt($(this).attr("id").split("hour")[1]);
   
   if(time < currentTime) {
    $(this).addClass("past");
   }
    else if (time === currentTime) {
    $(this).removeClass("past");
    $(this).addClass("present");
   } 
   else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
   }

  })
  
}







  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  taskTimeline();
});
