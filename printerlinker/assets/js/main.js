function writeData() {
  for (i = 0; i < plData.length; i++) {
    var tags = plData[i].plCategory;
    var binder = tags.match(/materials/);
    console.log(binder);
    
    
    if (binder != null) {
//      console.log(binder);
      var plParent = document.getElementById("binder");
      var plChild = document.createElement("div");
      plChild.innerHTML += "<h2>" + plData[i].plName + "</h2><p>" + plData[i].plStreet + "</p><a href='" + plData[i].plHyperlink + "' target='_blank'>Visit Website</a><br>";
      plChild.className = "content";
      plParent.appendChild(plChild);
      
//            document.getElementById("binder").innerHTML += "<div class='content'><h2>" + plData[i].plName + "</h2><p>" + plData[i].plStreet + "</p><a href='" + plData[i].plHyperlink + "' target='_blank'>Visit Website</a><br></div>"
    } // <-- If statement
  } // <-- For Loop
} // <-- Function writeData

window.onload = function () { //things to run once the DOM has load
  writeData()
}



$(document).ready(function () {
  
})

//
//    <script type="text/javascript" src="assets/js/jquery-3.2.0.min.js" charset="utf-8"></script>
//    <script type="text/javascript" src="assets/js/main.js" charset="utf-8"></script>
//    <script type="text/javascript" src="assets/js/printer-linker.js"></script>
//  
//<body>
//  <h1>Printer Linker</h1>
//  <div id="dataDisplay">
//   <a href="#binder"><h1>Binder</h1></a>
//    <div id="binder">
//      <table></table>
//    
//    </div>
//  </div>
//</body>
//

//    function highlightItems(category) {
//      populateData(category) //easy way to reset the colours is to rebuild the box, not great for performance, but will do for small data sets
//      var table = document.getElementById(category);
//      var tableRows = table.getElementsByClassName(category);
//      var allTableRows = table.childNodes;
//      
//      var tableWhole = document.getElementsByClassName("dataArea")
////      var tableRowsWhole = tableWhole.getElementsByClassName(category);
////      console.log(allTableRows);
////      console.log(category);
//
//        //set an undefined variable for our category colour pick
//        //assign colours based on category
////      if (category === "materials" && showCategory === "none") {
////        showCategory = "block";
////        //        toggleList = true;
////      }
////      else if (category === "materials" && showCategory === "block") {
////        showCategory = "none";
////        //        toggleList = false;
////        console.log(showCategory);
////      }
////      else if (category === "printerBinder" && showCategory === "none") {
////        showCategory = "block";
////        console.log(showCategory);
////      }
////      else if (category === "printerBinder" && showCategory === "block") {
////        showCategory = "none";
////        //        toggleList = false;
////        console.log(showCategory);
////      }
////      else if (category === "printer" && showCategory === "none") {
////        showCategory = "block"
////      }
////      else if (category === "printer" && showCategory === "block") {
////        showCategory = "none";
////        //        toggleList = false;
////        console.log(showCategory);
////      }
////      else { //apply default if no rule is set
////        showCategory = "none"
////      }
//      if (showCategory === "none") {
//        showCategory = "block";
//      } else {
//        showCategory = "none";
//      } 
//      for (i = 0; i < tableRows.length; i++) { //add background color to element's class name that matches the string variable passed
//        tableRows[i].style.display = showCategory;
//      }
//      return category;
//      
//      
//    }