

function openMenu() {
    var a = document.getElementById("navBar");
    if (a.className === "nav_head") {
        a.className += " responsive";
    } else {
        a.className = "nav_head";
    }
}