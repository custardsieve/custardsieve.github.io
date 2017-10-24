// --------------------------------- 
//Logo Function to change on Click
// --------------------------------- 
    function logo() {
         var animationToCheck = document.getElementById("animate-to-cross")
        , animationToBlue = document.getElementById("animation-to-blue")
        , animationToLogo = document.getElementById("animate-to-logo")
        , animationToBlack = document.getElementById("animation-to-black")
        , animationRotate = document.getElementById("animation-rotate");

      button.addEventListener('click', function () {

        if (button.classList.contains("close")) {
          button.classList.remove("close");
          animationToLogo.beginElement();
          animationToBlack.beginElement();
          animationRotate.beginElement();
          resetIntro();
        }

        else {
          button.classList.add("close");
          animationToCheck.beginElement();
          animationToBlue.beginElement();
        }
      }, false);
    }
