      $(document).ready(function() {

        var justSmoke = document.createElement('audio');
        justSmoke.setAttribute('src', '/assets/music/05-JustSmoke.mp3');
        $.get();
        justSmoke.addEventListener("load", function() {
          justSmoke.play();
        }, true);

        var coldArms = document.createElement('audio');
        coldArms.setAttribute('src', '/assets/music/09-ColdArms.mp3');
        $.get();
        coldArms.addEventListener("load", function() {
          coldArms.play();
        }, true);




        var playing = false;
        
        
        $('.cold_arms').click(function() {
          
          if (playing == false) {
            coldArms.play();
            playing = true;
            $('div.song').addClass('mouse_pause');
            $('div.circle-one').addClass('translate');
            $('div.circle-one').addClass('rotate');
            $('div.circle-two').addClass('translate');
            
          } else {
            playing = false;
            coldArms.pause();
            $('div.song').removeClass('mouse_pause');
            $('div.circle-one').removeClass('translate');
            $('div.circle-one').removeClass('rotate');
            $('div.circle-two').removeClass('translate');

          }
          
        });
        
        $('.just_smoke').click(function() {
          
          if (playing == false) {
            justSmoke.play();
            playing = true;
            $('div.song').addClass('mouse_pause');
            $('div.circle-one').addClass('translate');
            $('div.circle-one').addClass('rotate');
            $('div.circle-two').addClass('translate');
            
          } else {
            playing = false;
            justSmoke.pause();
            $('div.song').removeClass('mouse_pause');
            $('div.circle-one').removeClass('translate');
            $('div.circle-one').removeClass('rotate');
            $('div.circle-two').removeClass('translate');
          }

          
        });


     


      });
