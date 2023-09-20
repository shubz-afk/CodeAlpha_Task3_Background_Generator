//selector
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");


//function
function gradientChange(){
    body.style.background ="linear-gradient(to right ," +
    color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}

//AddEventListener
color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);