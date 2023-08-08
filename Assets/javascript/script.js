// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#time-display');

// TODO: Add code to display the current date in the header of the page.
function displayTime() {
  var currenttime = dayjs().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(currenttime);
}

function eventplanner() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    console.log(time);
    localStorage.setItem(time, value);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  var currenthour = parseInt(dayjs().format('H'));
  console.log(currenthour);

  $(".time-block").each(function(){
    var timedivs = $(this).attr("id").split("-")[1];
    console.log(timedivs);

    if(timedivs === currenthour){
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }else if(timedivs < currenthour){
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }else{
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });


  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $("#9 .time-block").val(localStorage.getItem("09"));
  $("#10 .time-block").val(localStorage.getItem("10"));
  $("#11 .time-block").val(localStorage.getItem("11"));
  $("#12 .time-block").val(localStorage.getItem("12"));
  $("#13 .time-block").val(localStorage.getItem("13"));
  $("#14 .time-block").val(localStorage.getItem("14"));
  $("#15 .time-block").val(localStorage.getItem("15"));
  $("#16 .time-block").val(localStorage.getItem("16"));
  $("#17 .time-block").val(localStorage.getItem("17"));
};

displayTime();
setInterval(displayTime, 1000);
eventplanner();