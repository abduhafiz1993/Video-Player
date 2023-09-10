const videoPlayer = document.querySelector("video");
const playBtn = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const progressRange = document.querySelector(".progress-range");
const progressbar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");

// Play & Pause ----------------------------------- //

function setpause(){
    videoPlayer.pause();
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
}
function togglePlay(){
    if(videoPlayer.paused){
        videoPlayer.play();
        playBtn.classList.replace("fa-play", "fa-pause");
        playBtn.setAttribute("title", "Pause");
    }
    else{
        setpause();
    }
}

// event listener
videoPlayer.addEventListener("ended", setpause);
playBtn.addEventListener("click", togglePlay);
videoPlayer.addEventListener("click", togglePlay);

// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


