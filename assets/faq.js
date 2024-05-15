let myP = document.querySelectorAll("p");
let myH = document.querySelectorAll("h2");

myP.forEach(function(d){
    d.classList.add("display")
    d.classList.add("none")
})
myH.forEach(function(d){
    d.classList.add("h")
})



document.addEventListener("DOMContentLoaded", function() {
    // Loop through each element with the class "display"
    document.querySelectorAll(".display").forEach(function(element) {
        let img = element.previousElementSibling.querySelector("img");
        // Check if img exists before adding a new one
        if (!img) {
            img = document.createElement("img");
            img.classList.add("icon")
            img.setAttribute("src", "assets/images/icon-plus.svg");
            img.setAttribute("alt", "open icon");
            element.previousElementSibling.appendChild(img);
        }
    });

    // Loop through each element with the class "h"
    document.querySelectorAll(".h").forEach(function(element) {
        let img = element.querySelector("img");
        // Check if img exists before adding a new one
        if (!img) {
            img = document.createElement("img");
            img.classList.add("icon")
            img.setAttribute("src", "assets/images/icon-plus.svg");
            img.setAttribute("alt", "open icon");
            element.appendChild(img);
        }
    });
});

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("display")) {
        let h = e.target.previousElementSibling;
        e.target.classList.toggle("none");
        h.classList.toggle("opened");

        let img = h.querySelector("img");
        // Check if img exists before setting the src attribute
        if (img) {
            img.classList.add("icon")
            img.setAttribute("src", h.classList.contains("opened") ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg");
            img.setAttribute("alt", "open icon");
        }
    } else if (e.target.classList.contains("h")) {
        let p = e.target.nextElementSibling;
        p.classList.toggle("none");
        e.target.classList.toggle("opened");

        let img = e.target.querySelector("img");
        // Check if img exists before setting the src attribute
        if (img) {
            img.classList.add("icon")
            img.setAttribute("src", e.target.classList.contains("opened") ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg");
            img.setAttribute("alt", "open icon");
        }
    }else if (e.target.classList.contains("icon")){
        let h2 = e.target.parentElement
        let p = h2.nextElementSibling;
        let img = h2.querySelector("img");
        if (img) {
            img.classList.add("icon")
            img.setAttribute("src", h2.classList.contains("opened") ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg" );
            img.setAttribute("alt", "open icon");
        }
        p.classList.toggle("none");
        h2.classList.toggle("opened")
    }
});


