function openMenu() {
    let menuButton = document.querySelector("#menu_button")
    let menuButton$before = document.querySelector("#button_before")
    let menuButton$after = document.querySelector("#button_after")
    let nav = document.querySelector("nav")
    
    if (menuButton.getAttribute("state") == "closed") {
        menuButton$before.style.transform = "rotate(-45deg)"
        menuButton$after.style.transform = "rotate(45deg)"
        menuButton$before.style.transitionDuration = "0.5s"
        menuButton$after.style.transitionDuration = "0.5s"
        menuButton.setAttribute("state" , "open")
        nav.style.height = "695.2px"
        nav.style.transitionDuration = "0.5s"
    }
    else if (menuButton.getAttribute("state") == "open") {
        menuButton$before.style.transform = "rotate(45deg)"
        menuButton$after.style.transform = "rotate(-45deg)"
        menuButton.setAttribute("state" , "closed")
        nav.style.height = "0"
    }

}

function BikaBoo() {
    let showButton = document.getElementById("show_button")
    let BikaBoo = document.getElementById("Bika_Boo")
    if (showButton.getAttribute("state") == "hidden") {
        BikaBoo.style.display = "flex"
        showButton.setAttribute("state" , "shown")
        showButton.innerText = "hide"
    }
    else if (showButton.getAttribute("state") == "shown") {
        BikaBoo.style.display = "none"
        showButton.setAttribute("state" , "hidden")
        showButton.innerText = "show"
    }
}

