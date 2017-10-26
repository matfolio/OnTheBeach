// This is just a way to work around with the clicking of each travel event 
// without using JQuery and component method. Not the best practices though, 
// but its use depends on project requirement and taste.

//  I would like to toggle the show and hide of the description section of the List item
// The index passed as a parameter is meant to uniquely identify each item.
// setting the appropriate properties for the DOM elements.

export function toggleDescription(index) {

    var x = document.getElementById("toggle"+index);
    var y = document.getElementById("description"+index);

    if (x.style.transform === "rotate(-45deg)") {
        x.style.transform = "rotate(45deg)";
        y.style.display = "block";
    } else {
        x.style.transform = "rotate(-45deg)";
        y.style.display = "none";
    }
}