const text1 = document.querySelector("#card-resume1");
const text2 = document.querySelector("#card-resume2");
const text3 = document.querySelector("#card-resume3");
const text4 = document.querySelector("#card-resume4");
const text5 = document.querySelector("#card-resume5");
const axe1 = document.querySelector("#w3-rest1");
const axe2 = document.querySelector("#w3-rest2");
const axe3 = document.querySelector("#w3-rest3");
const axe4 = document.querySelector("#w3-rest4");
const axe5 = document.querySelector("#w3-rest5");

axe1.addEventListener("mouseover", function() {
    text1.style.color = "black";
})

axe2.addEventListener("mouseover", function() {
    text2.style.color = "black";
})

axe3.addEventListener("mouseover", function() {
    text3.style.color = "black";
})

axe4.addEventListener("mouseover", function() {
    text4.style.color = "black";
})

axe5.addEventListener("mouseover", function() {
    text5.style.color = "black";
})

axe1.addEventListener("mouseout", function() {
    text1.style.color = "transparent";
})

axe2.addEventListener("mouseout", function() {
    text2.style.color = "transparent";
})

axe3.addEventListener("mouseout", function() {
    text3.style.color = "transparent";
})

axe4.addEventListener("mouseout", function() {
    text4.style.color = "transparent";
})

axe5.addEventListener("mouseout", function() {
    text5.style.color = "transparent";
})