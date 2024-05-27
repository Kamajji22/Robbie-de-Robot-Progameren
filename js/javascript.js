//constants
const schroefKnop = document.querySelector("#schroefKnop");
const stroomKnop = document.querySelector("#stroomKnop");
const olieKnop = document.querySelector("#olieKnop")

const olieTekst = document.querySelector("#oliePercentage")
const schroefTekst = document.querySelector("#schroefPercentage")
const stroomTekst = document.querySelector("#stroomPercentage")

const robbie = document.querySelector("#robbie")

const warning = document.querySelector("#warning")

//lets
let maxOlie = 100;
let maxStroom = 100;
let maxSchroef = 100;

//audio
let audioOlie = new Audio("sound/olie.wav") //https://freesound.org/people/sapphicrabbit/sounds/724223/ olie drinken soundeffect
let audioSchroef = new Audio("sound/schroef.wav") //https://freesound.org/people/CallFlan/sounds/495094/ schroeven soundeffect
let audioStroom = new Audio("sound/stroom.wav") //https://freesound.org/people/The-Sacha-Rush/sounds/657803/ stroom soundeffect
let audioKortsluiting = new Audio("sound/kortsluiting.wav") //https://freesound.org/people/mad-monkey/sounds/66692/ kortsluiting soundeffect

//functions
function olieOmlaag() {
    if (maxOlie > 0) {
        maxOlie -= 1;
    } 
    olieTekst.textContent = "Olie " + maxOlie + "%"
}

function voerOlie() {
    if (maxOlie < 95) {
        maxOlie += 5;
    } 
    audioOlie.play()
}

function schroefOmlaag() {
    if (maxSchroef > 0) {
        maxSchroef -= 1;
    } 
    schroefTekst.textContent = "Schroef " + maxSchroef + "%"
}

function voerSchroef() {
    if (maxSchroef < 95) {
        maxSchroef += 5;
    } 
    audioSchroef.play()
}

function stroomOmlaag() {
    if (maxStroom > 0) {
        maxStroom -= 1;
        
    } 
    stroomTekst.textContent = "Stroom " + maxStroom + "%"
}

function voerStroom() {
    if (maxStroom < 95) {
        maxStroom += 5;
    } 
    audioStroom.play()
}

function robbieBang() {
    if (maxOlie < 25 || maxSchroef < 25 || maxStroom < 25) {
        robbie.src = "../images/robbieBang.gif"
        audioKortsluiting.play()
        warning.addEventListener("fullscreenchange", function () {
            warning.classList.toggle(".hideElement")
        })
    }
    else {
        robbie.src = "../images/robbieBlij.png"
    }
}

olieKnop.addEventListener("click" , voerOlie)
schroefKnop.addEventListener("click" , voerSchroef)
stroomKnop.addEventListener("click" , voerStroom)

setInterval(olieOmlaag, 1000) 
setInterval(schroefOmlaag, 1000) 
setInterval(stroomOmlaag, 1000) 
setInterval(robbieBang, 1000)