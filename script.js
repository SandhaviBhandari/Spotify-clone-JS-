console.log("Welcome to Spotify");

//Initialize the variable
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songs=[
    {songName: "kehi mitho baat gara", filePath:"song/1.mp3, coverPath:covers/1.jpg"}
    {songName: "Ekadeshma", filePath:"song/2.mp3, coverPath:covers/2.jpg"}
    {songName: "Jobhaagya ma", filePath:"song/3.mp3, coverPath:covers/3.jpg"}
    {songName: "Raato rachandra Surya", filePath:"song/4.mp3, coverPath:covers/4.jpg"}
    {songName: "National Anthem", filePath:"song/5.mp3, coverPath:covers/5.jpg"}
]

let audioElement= new Audio('1.mp3');
//audioElement.play

//Handle play/pause click
masterplay.addEventListiner('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi bi-play-fill');
        masterPlay.classList.add('bi bi-pause-fill');
        gif.style.opacity=1;


    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi bi-pause-fill');
        masterPlay.classList.add('bi bi-play-fill');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
//Update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})

myProgressBar.addEventListiner('change', ()=>{


})