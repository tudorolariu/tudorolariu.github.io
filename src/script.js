const loadingScreen = document.querySelector("#loadingScreen");
const loadingFrame = document.querySelector(".loadingFrame");
const percent = document.querySelector("#percent");
const soundOnParagraph = document.querySelector(".soundOnParagraph");
const enterButton = document.getElementById("enterButton");
const dropDownBackground = document.querySelector(".dropDownBackground");

const backgroundMusic = document.querySelector(".backgroundMusic");
const audioButton = document.getElementById("audioButton");
const playPauseIcon = document.querySelector("#playPauseIcon");

const bannerTitleRow = document.querySelector(".bannerTitleRow");
const bannerWordComing = document.querySelector(".bannerWordComing");
const bannerWordSoon = document.querySelector(".bannerWordSoon");
const bannerDescription = document.querySelector(".bannerDescription");
const scrollIndicator = document.querySelector(".scrollIndicator");

const businessCard = document.querySelector("#businessCard");
const instagramButton = document.getElementById("instagramButton");
const instagramDescription = document.querySelector(".instagramDescription");
const instagramDescriptionCloseButton = document.getElementById("instagramDescriptionCloseButton");

const bottomOfWebpage = document.querySelector(".bottomOfWebpage");

let percentValue = 0;
let audioPlayStatus = false;

let increment = setInterval(() => {
    percentValue++;
    percent.textContent = `${percentValue}%`;

    if(percentValue == 100){
        clearInterval(increment);
        loadingFrame.classList.remove("active");
        soundOnParagraph.classList.add("shown");
        enterButton.classList.add("shown");
    }
},20);

function PlayPauseMusic(){
    if(audioPlayStatus == false){
        audioPlayStatus = true;
        backgroundMusic.play();
        playPauseIcon.classList.remove("fa-circle-play");
        playPauseIcon.classList.add("fa-circle-pause");
    }else{
        audioPlayStatus = false;
        backgroundMusic.pause();
        playPauseIcon.classList.remove("fa-circle-pause");
        playPauseIcon.classList.add("fa-circle-play");
    }
}

function TriggerIntro(){
    setTimeout(() => {
        PlayPauseMusic();
    },300);
    setTimeout(() => {
        dropDownBackground.classList.add("shown");
    },350);

    // Clear Screen
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    },1100);

    // Display Main Elements
    setTimeout(() => {
        bannerTitleRow.classList.add("shown");
    },1150);
    setTimeout(() => {
        bannerWordComing.classList.add("shown");
    },1200);
    setTimeout(() => {
        bannerWordSoon.classList.add("shown");
    },1800);
    setTimeout(() => {
        bannerDescription.classList.add("shown");
        audioButton.classList.add("shown");
    },2400);
    setTimeout(() => {
        scrollIndicator.classList.add("shown");
        businessCard.classList.remove("hidden");
        bottomOfWebpage.classList.remove("hidden");
    },5200);
    // setTimeout(() => {
    // },10000);
}

function ShowInstagramDescription(){
    instagramDescription.classList.remove("hidden");
    instagramDescription.classList.add("shown");
}

function HideInstagramDescription(){
    instagramDescription.classList.remove("shown");
    instagramDescription.classList.add("hiding");
    setTimeout(() => {
        instagramDescription.classList.remove("hiding");
    },500);
}

setInterval(function(){
    if(!businessCard.matches(':hover')){
       HideInstagramDescription();
    }
}, 500)

enterButton.addEventListener("click", TriggerIntro);
audioButton.addEventListener("click", PlayPauseMusic);
instagramButton.addEventListener("click", ShowInstagramDescription);
instagramDescriptionCloseButton.addEventListener("click", HideInstagramDescription);