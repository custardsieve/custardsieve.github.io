$(document).ready(function () {
  
  
  var red;
  var green;
  var blue;

  
  function bgcolor(red, green, blue) {
    var red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return red;
    return green;
    return blue;
  }

  
  function txtcolor(red, green, blue) {
    var red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return red;
    return green;
    return blue;
  }
  
  function colorChange() {
    
  var txtRed = txtcolor(red);
  var txtGreen = txtcolor(green);
  var txtBlue = txtcolor(blue);

  var bgRed = bgcolor(red);
  var bgGreen = bgcolor(green);
  var bgBlue = bgcolor(blue);
    
    $('body').css('background-color', 'rgb(' + bgRed + ',' + bgGreen + ',' + bgBlue + ')');
    $('body').css('color', 'rgb(' + txtRed + ',' + txtGreen + ',' + txtBlue + ')');
    $('.box1').css({'border-right':'15px solid rgb(' + txtRed + ',' + txtGreen + ',' + txtBlue + ')'});
    $('.box2').css({'background-color':'rgb(' + txtRed + ',' + txtGreen + ',' + txtBlue + ')'});
    $('.box3').css({'border-left':'15px solid rgb(' + txtRed + ',' + txtGreen + ',' + txtBlue + ')'});
    $('span.nav').css({'color':'rgb(' + bgRed + ',' + bgGreen + ',' + bgBlue + ')'});
    $('span.nav').css('border-bottom', '4px solid rgb(' + txtRed + ',' + txtGreen + ',' + txtBlue + ')');
  }
  
  colorChange();
  
  
  
  
  $('#wheel').addClass('start');
  $('aside.left').css({'display':'none'})
  $('aside.right').css({'flex-basis':'100%'});
  $('div.body-container').addClass('height500');
  
  
  
  
  $('#wheel').click(function () {
    $('#wheel').removeClass('start');
    $('aside.left').css({'display':'flex'});
    $('aside.right').css({'flex-basis':''});
    $('#wheel').css('transition','1s');
    $('div.body-container').removeClass('height500');
  });
  
  
  
  $('div.link').click(function () {
    $('#wheel').removeClass('start');
    $('div.body-container').removeClass('height500');
    $('body').css("transition", "all .2s ease-in-out ")
    $('div#wheel').css("transition", "all .6s ease-in-out ")
  });
  $('div.link-a').click(function () {
    $('#wheel').css("transform", "rotate(0deg)");
    $('div.a').css("z-index", "1");
    $('div.b').css("z-index", "0");
    $('div.c').css("z-index", "0");
    $('div.d').css("z-index", "0");
    $('div.e').css("z-index", "0");
    $('div.f').css("z-index", "0");
    colorChange();
  });
  $('div.link-b').click(function () {
    $('#wheel').css("transform", "rotate(-60deg)");
    $('div.a').css("z-index", "0");
    $('div.b').css("z-index", "1");
    $('div.c').css("z-index", "0");
    $('div.d').css("z-index", "0");
    $('div.e').css("z-index", "0");
    $('div.f').css("z-index", "0");
    colorChange();
  });
  $('div.link-c').click(function () {
    $('#wheel').css("transform", "rotate(-120deg)");
    $('div.a').css("z-index", "0");
    $('div.b').css("z-index", "0");
    $('div.c').css("z-index", "1");
    $('div.d').css("z-index", "0");
    $('div.e').css("z-index", "0");
    $('div.f').css("z-index", "0");
    colorChange();
  });
  $('div.link-d').click(function () {
    $('#wheel').css("transform", "rotate(-180deg)");
    colorChange();
    $('div.a').css("z-index", "0");
    $('div.b').css("z-index", "0");
    $('div.c').css("z-index", "0");
    $('div.d').css("z-index", "1");
    $('div.e').css("z-index", "0");
    $('div.f').css("z-index", "0");
  });
  $('div.link-e').click(function () {
    $('#wheel').css("transform", "rotate(-240deg)");
    $('div.a').css("z-index", "0");
    $('div.b').css("z-index", "0");
    $('div.c').css("z-index", "0");
    $('div.d').css("z-index", "0");
    $('div.e').css("z-index", "1");
    $('div.f').css("z-index", "0");
    colorChange();
  });
  $('div.link-f').click(function () {
    $('#wheel').css("transform", "rotate(-300deg)");
    $('div.a').css("z-index", "0");
    $('div.b').css("z-index", "0");
    $('div.c').css("z-index", "0");
    $('div.d').css("z-index", "0");
    $('div.e').css("z-index", "0");
    $('div.f').css("z-index", "1");
    colorChange();
  });
});