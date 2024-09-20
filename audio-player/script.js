var songs = ["Song1.mp3","Song2.mp3","Song3.mp3"];
var poster = ["./img/lemonade.png","./img/dontstartnow.png","./img/lemonade.png"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;    // it point to the current song

window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){
    
    song.src = songs[currentSong];  //set the source of 0th song 
    
    songTitle.textContent = songs[currentSong]; // set the title of song
    
    song.play();    // play the song
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        document.querySelector("#play img").attr("src","pause.png");
    }
    else{
        song.pause();
        document.querySelector("#play img").attr("src","play.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});


function next(){
    
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    document.querySelector("#play img").attr("src","pause.png");
    document.querySelector("#image img").attr("src",poster[currentSong]);
    document.querySelector("#background img").attr("src",poster[currentSong]);
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    document.querySelector("#play img").attr("src","pause.png");
    document.querySelector("#image img").attr("src",poster[currentSong]);
    document.querySelector("#background img").attr("src",poster[currentSong]);
}