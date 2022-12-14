//display current date and day
var dayJsObject = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").text(dayJsObject);
console.log(dayJsObject);



$(document).ready(function () {
  // added event listener for click to save button
$(".saveBtn").on("click", function(){
  var textValue = $(this).siblings(".description").val();
  var timeValue = $(this).parent().attr("id");
//text saved to local storage
 localStorage.setItem(textValue, timeValue);


localStorage.getItem(textValue, timeValue);

}) 
  

 function taskTimeline() {
  //getting the current no. of hours
  dayjs().hour();
  var currentTime = dayjs().hour();
  console.log(currentTime);

  //looping through timeblocks
  $(".time-block").each(function() {
   var time= parseInt($(this).attr("id").split("hour")[1]);
   
   //conditional statements for adding classes to timeblocks
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

  
  taskTimeline();
});
