document.addEventListener('DOMContentLoaded', function() { 

  var typed = new Typed('#typed', {
//    stringsElement: '#typed-strings',
    strings: ["I think<em>bad coffee</em> is still better than no coffee.^5000", "me gusta la paella!", "It's " + timeDay + " " + timeHour + ":" + timeMinute + ":" + timeSeconds + " " + amPm + " where we are.", ],
    typeSpeed: 40,
    backSpeed: 20,
    startDelay: 3000,
    loop: false,
    loopCount: Infinity,
  });

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