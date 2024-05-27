console.log("Hallo Werled");

const schroefKnop = document.querySelector("#schroefKnop");
const stroomKnop = document.querySelector("#stroomKnop");
const olieKnop = document.querySelector("#olieKnop")

const olieTekst = document.querySelector("#oliePercentage")
const schroefTekst = document.querySelector("#schroefPercentage")
const stroomTekst = document.querySelector("#stroomPercentage")

const robbie = document.querySelector("#robbie")

let maxOlie = 100;
let maxStroom = 100;
let maxSchroef = 100;

let audioOlie = new Audio("sound/olie.wav")
let audioSchroef = new Audio("sound/schroef.wav")
let audioStroom = new Audio("sound/stroom.wav")

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

function robbieBang() {
    if (maxOlie < 20 || maxSchroef < 20 || maxStroom < 20 && robbieBlij == true) {
        robbie.src = "/images/robbieBang.png"
    }
    else {
        robbie.src = "/images/robbieBlij.png"
    }
}

function voerStroom() {
    if (maxStroom < 95) {
        maxStroom += 5;
    } 
    audioStroom.play()
}

olieKnop.addEventListener("click" , voerOlie)
schroefKnop.addEventListener("click" , voerSchroef)
stroomKnop.addEventListener("click" , voerStroom)

setInterval(olieOmlaag, 1000) 
setInterval(schroefOmlaag, 1000) 
setInterval(stroomOmlaag, 1000) 
setInterval(robbieBang, 1000)