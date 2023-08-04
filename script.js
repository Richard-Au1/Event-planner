// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#time-display');
var timedivs = document.querySelectorAll('.row');
var savBtnEl = document.querySelectorAll('.btn');

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
  savBtnEl.addEventListener("click", function(event){
    event.preventDefault();

    window.localStorage.setItem("description", description);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currenthour = parseInt(dayjs().format('H'));
  // var currenttime = parseInt(getElementbyId(''));

  for(var i = 0 ; i < timedivs.length; i++){
    currenttime = this.attr(timedivs.Id);

    if(currenttime === currenthour){
      el.row.addClass("present");
      el.row.removeClass("past");
      el.row.removeClass("future");
    }else if(currenttime < currenthour){
      el.row.addClass("past");
      el.row.removeClass("present");
      el.row.removeClass("future");
    }else{
      el.row.addClass("future");
      el.row.removeClass("present");
      el.row.removeClass("past");
    }
  }


  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

};

displayTime();
setInterval(displayTime, 1000);