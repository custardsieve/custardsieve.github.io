function bDCarousell(areas) {
    switch (areas) {
        case 'nav-wishing':
            bDBody.className = "";
            bDBody.className = "dark";
            belt.style.right = "300%";
        break; 
        case 'nav-contact':
            bDBody.className = "";
            bDBody.className = "darker";
            belt.style.right = "400%";
        break; 
        case 'nav-itinerary':
            bDBody.className = "";
            bDBody.className = "light";
            belt.style.right = "100%";
        break; 
        case 'nav-accommodation':
            bDBody.className = "";
            bDBody.className = "lighter";
            belt.style.right = "0";
        break; 
        case 'nav-home':
            bDBody.className = "";
            bDBody.className = "middle";
            belt.style.right = "200%";
        break; 
        default:
            console.log('no match');
    }
}


function bDAccordion() {
    var openSesame = document.querySelector(".bank-details");
    var checkOpen = openSesame.classList.contains("open");
    var closeButton = document.querySelector(".accordionButton");
    if (checkOpen) {
        openSesame.classList.remove("open");
        closeButton.classList.remove("turn");
    } else {
        openSesame.classList.add("open");
        closeButton.classList.add("turn");
    }
}
function test() {
    var complete = document.getElementById('complete');
    var openComplete = complete.classList.contains('hide') == true;
    if (openComplete) {
        complete.classList.add('show');
        complete.classList.remove('hide');
        console.log("open");
        console.log(openComplete);
        
    } else {
        console.log("close");
        console.log(openComplete);
        complete.classList.remove('show');
        complete.classList.add('hide');
    }
    
}