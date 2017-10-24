// --------------------------------- 
// Creates a random Grid on Hover
// --------------------------------- 
    function random(min, max) {
      var number = Math.floor(Math.random() * (max - min + 1)) + min;
      return number;
    }

// ---------------------------------     
// Sorts Images OnHover
// --------------------------------- 
    function populateHover(itemName) {
   
      var dataArea = document.getElementById("tupperware");
      var dataAreaContainer = document.createElement("div");
      dataAreaContainer.id += "dataAreaContainer";
      dataAreaContainer.style.zIndex = "6";
      for (i = 0; i < dnData.length; i++) {
        var tag = dnData[i].class;
        var string = tag.match(itemName);
        if (string != null) {
          dataAreaContainer.innerHTML += "<div class='item col" + random(1, 3) + "of6'><div class='spacer'><img src='" + dnData[i].src + "'></div></div>";         
        }
      }
      dataArea.appendChild(dataAreaContainer);
      
//      Initiates the animation for the close button
      var animationToCheck = document.getElementById("animate-to-cross")
        , animationToBlue = document.getElementById("animation-to-blue")
      
      button.classList.add("close");
      animationToCheck.beginElement();
      animationToBlue.beginElement();
      
    }

    function removeLoading() {
      var dataTable = document.getElementById("loading");
      dataAreaContainer.parentNode.removeChild(dataTable);
      
    }
// ---------------------------------
// Hide and deletes the datacontainer 
// for the image sorts
// ---------------------------------
    function resetIntro() {
      var dataTable = document.getElementById("dataAreaContainer");
      dataTable.parentNode.removeChild(dataTable);
    }