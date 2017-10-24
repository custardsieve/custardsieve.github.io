 document.addEventListener('DOMContentLoaded', function() { 
  
    var difference = timeDifference();
    console.log(difference);
   if (difference === 0) {
     var d = new Date;
  var typed = new Typed('#typed', {
    
    strings: ["it's " + d.toLocaleTimeString() + " where are are.^2500 Why don't you give me a call,^1000 I should be available.", ],
    typeSpeed: 40,
    backSpeed: 20,
    startDelay: 3000,
    loop: false,
    loopCount: Infinity,
  });
   } else {
     var typed = new Typed('#typed', {
    
    strings: ["there is " + difference + " hours difference between us.^2500 So I may be either in bed,^1000 Just waking up^1000 or^1000 in a yoga session.^2000 So keep this in mind before contacting me.", ],
    typeSpeed: 40,
    backSpeed: 20,
    startDelay: 3000,
    loop: false,
    loopCount: Infinity,
  });
   }

});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}