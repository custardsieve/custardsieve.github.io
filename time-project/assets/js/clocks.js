var date = new Date;
var utcHours = date.getUTCHours() + 11;
var hours = date.getHours();
var seconds = date.getSeconds();
var minutes = date.getMinutes();

function initLocalClocks() {  
      // Creates the AM or PM content for the clocks
      var localClock = document.getElementById('local');
      localClock.querySelector('.am_pm').innerHTML = "PM";
      if (hours > 12) {
        localClock.querySelector('.am_pm').innerHTML = "PM";
      } else {
        localClock.querySelector('.am_pm').innerHTML = "AM";
      }
      
      // Create an object with each hand and it's angle in degrees
      var hands = [
        {
          hand: 'hours'
          , angle: (hours * 30) + (minutes / 2)
    }
        , {
          hand: 'minutes'
          , angle: (minutes * 6)
    }
        , {
          hand: 'seconds'
          , angle: (seconds * 6)
    }
  ];
      // Loop through each of these hands to set their angle
      for (var j = 0; j < hands.length; j++) {
        var localClock = document.getElementById('local');
        var elements = localClock.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
          elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
          
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          }
        }
      }
    }
    
    function initMelbClocks() {
      // Creates the AM or PM content for the clocks
      var melbClock = document.getElementById('melb');
      melbClock.querySelector('.am_pm').innerHTML = "PM";
      if (utcHours > 12) {
        melbClock.querySelector('.am_pm').innerHTML = "PM";
      } else {
        melbClock.querySelector('.am_pm').innerHTML = "AM";
      }
      
      // Create an object with each hand and it's angle in degrees
      var hands = [
        {
          hand: 'hours'
          , angle: (utcHours * 30) + (minutes / 2)
    }
        , {
          hand: 'minutes'
          , angle: (minutes * 6)
    }
        , {
          hand: 'seconds'
          , angle: (seconds * 6)
    }
  ];
      // Loop through each of these hands to set their angle
      for (var j = 0; j < hands.length; j++) {
        var melbClock = document.getElementById('melb');
        var elements = melbClock.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
          elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
          
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
          }
        }
      }
    }

    function setUpMinuteHands() {
      // Find out how far into the minute we are
      var containers = document.querySelectorAll('.minutes-container');
      var secondAngle = containers[0].getAttribute("data-second-angle");
      if (secondAngle > 0) {
        // Set a timeout until the end of the current minute, to move the hand
        var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
        setTimeout(function () {
          moveMinuteHands(containers);
        }, delay);
      }
    }

    function moveMinuteHands(containers) {
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
      }
      // Then continue with a 60 second interval
      setInterval(function () {
        for (var i = 0; i < containers.length; i++) {
          if (containers[i].angle === undefined) {
            containers[i].angle = 12;
          }
          else {
            containers[i].angle += 6;
          }
          containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
          containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
        }
      }, 60000);
    }
    

function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
  setInterval(function() {
     
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
}
    function timeDifference() {
      var difference = 0;
      if (utcHours > hours) {
        difference = utcHours - hours;
      } else if (utcHours < hours) {
        difference = hours - utcHours;
      }
      return difference;
    }