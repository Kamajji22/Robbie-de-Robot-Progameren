//constants
//const knoppen
const schroefKnop = document.querySelector("#schroefKnop");
const stroomKnop = document.querySelector("#stroomKnop");
const olieKnop = document.querySelector("#olieKnop");

//const % tekst
const olieTekst = document.querySelector("#oliePercentage");
const schroefTekst = document.querySelector("#schroefPercentage");
const stroomTekst = document.querySelector("#stroomPercentage");

//const robbie
const robbie = document.querySelector("#robbie");

//constant ontploffingswarning
const warning = document.getElementById("warning");
const gameOver = document.getElementById("gameOver");
const gameOverTekst = document.getElementById("gameOverTekst");

const speelOpnieuw = document.getElementById("speelOpnieuw")

//lets 
//max lets
let maxOlie = 100;
let maxStroom = 100;
let maxSchroef = 100;

let randomGetal;

//audio 
let audioOlie = new Audio("sound/olie.wav") //https://freesound.org/people/sapphicrabbit/sounds/724223/ olie drinken soundeffect
let audioSchroef = new Audio("sound/schroef.wav") //https://freesound.org/people/CallFlan/sounds/495094/ schroeven soundeffect
let audioStroom = new Audio("sound/stroom.wav") //https://freesound.org/people/The-Sacha-Rush/sounds/657803/ stroom soundeffect
let audioKortsluiting = new Audio("sound/kortsluiting.wav") //https://freesound.org/people/mad-monkey/sounds/66692/ kortsluiting soundeffect
let audioExplosie = new Audio("sound/explosie.mp3") //https://freesound.org/people/Timbre/sounds/711326/ explosie soundeffect

//robbie voiceclips
let voicePlaylist = ["sound/robbieIkBen.mp3", 'sound/robbieOlie.mp3', "sound/robbieSchroeven.mp3", "sound/robbieWilNietOntploffen.mp3"]
let voiceClip = new Audio()

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
        robbie.src = "images/robbieBang.gif"
        audioKortsluiting.play()
        warning.style.display = "block"
    }
    else {
        robbie.src = "images/robbieBlij.png"
        warning.style.display = "none"
    }
}

//explosie (game over)
function explosie() {
    if (maxStroom == 0 || maxSchroef == 0 || maxOlie == 0) {
        audioExplosie.play()
        robbie.src = "images/robbieDood.png" //https://pixabay.com/nl/vectors/explosie-ontploffing-uitbarsting-147909/ boom cartoon tekening
        clearInterval(robbieBangInterval)
        clearInterval(explosieInterval)
        warning.style.display = "none"
        gameOver.style.display = "block"
        gameOverTekst.style.display = "block"
        speelOpnieuw.style.display = "block"
    }
}

//robbie random praten (met hulp van diego)
function robbiePraat() {
}

function playRandomRobbie() {
    randomGetal = Math.floor(Math.random() * 4)
    voiceClip.src = voicePlaylist[randomGetal]
    voiceClip.play();
    return randomGetal
}

//opnieuw spelen (met hulp van Diego)
function playAgain() {
    location.reload();
}

olieKnop.addEventListener("click", voerOlie)
schroefKnop.addEventListener("click", voerSchroef)
stroomKnop.addEventListener("click", voerStroom)
robbie.addEventListener("click", playRandomRobbie)

setInterval(olieOmlaag, 1000)
setInterval(schroefOmlaag, 1000)
setInterval(stroomOmlaag, 1000)
let robbieBangInterval = setInterval(robbieBang, 1000)
let explosieInterval = setInterval(explosie, 1000)

speelOpnieuw.addEventListener("click", playAgain)