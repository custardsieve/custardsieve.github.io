// Set the date we're counting down to
var countDownDate = new Date("Jun 20, 2020 15:00:00").getTime();
// var countDownDate = new Date("Jan 4, 2020 14:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {  

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Get elements to inject time
  var elementDay = document.getElementById("")

  // Time calculations for days, hours, minutes and seconds
  var numberDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  var numberHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var numberMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var numberSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = numberDays;
  document.getElementById("hours").innerHTML = numberHours;
  document.getElementById("minutes").innerHTML = numberMinutes;
  document.getElementById("seconds").innerHTML = numberSeconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "yey!";
  }
  // Loads container once the script has loaded
  document.getElementById("count-down").style.display = "flex";
  
},1000);
