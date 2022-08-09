function hideIntroShowNext() {
    var current = document.getElementById("intro");
    if (current.style.display = "block") {
        current.style.display = "none";
    } 
    var next = document.getElementById("text-entry");
    if (next.style.display = "none") {
        next.style.display = "block";
    } 
}

function hideTextEntryShowNext() {
    var x = document.getElementById("text-entry");
    if (x.style.display = "block") {
        x.style.display = "none";
    } 
    var y = document.getElementById("pop-bubble");
    if (y.style.display = "none") {
        y.style.display = "block";
    } 
}

function hidePopBubbleShowNext() {
    var current = document.getElementById("pop-bubble");
    if (current.style.display = "block") {
        current.style.display = "none";
    } 
    var next = document.getElementById("end");
    if (next.style.display = "none") {
        next.style.display = "block";
    }
}

function hideEndShowTextEntry() {
    var end = document.getElementById("end");
    if (end.style.display = "block") {
        end.style.display = "none";
    } 
    var y = document.getElementById("text-entry");
    if (y.style.display = "none") {
        y.style.display = "block";
    } 
}

function hideEndShowIntro() {
    var end = document.getElementById("end");
    if (end.style.display = "block") {
        end.style.display = "none";
    } 
    var y = document.getElementById("intro");
    if (y.style.display = "none") {
        y.style.display = "block";
    } 
}
