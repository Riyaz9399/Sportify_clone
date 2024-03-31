
// initial the variable
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgresssBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");

let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    {songName : "Dil galti Kar baitha hai" , filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
    {songName : "Cielo - Huma_Huma" , filePath:"song/2.mp3" , coverPath:"covers/2.jpg"},
    {songName : "DEAF KEV - Invincible" , filePath:"song/3.mp3" , coverPath:"covers/3.jpg"},
    {songName : "Different Heaven & EH!DE " , filePath:"song/4.mp3" , coverPath:"covers/4.jpg"},
    {songName : "Hui MAI Malang" , filePath:"song/5.mp3" , coverPath:"covers/5.jpg"},
    {songName : "English Instrumental vocal" , filePath:"song/6.mp3" , coverPath:"covers/6.jpg"},
    {songName : "Teri Chaahat ke " , filePath:"song/7.mp3" , coverPath:"covers/7.jpg"},
    {songName : "Afeemi Afeemi" , filePath:"song/8.mp3" , coverPath:"covers/8.jpg"},
    {songName : "Mai chala" , filePath:"song/9.mp3" , coverPath:"covers/9.jpg"},
    {songName : "Oo Jaana" , filePath:"song/10.mp3" , coverPath:"covers/10.jpg"},
]
 


 songItems.forEach((element,i) =>{
   //console.log(element , i);
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })
// audioElment.play();



// handle play/Pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// listen to event 
audioElement.addEventListener('timeupdate' ,() =>{
    //console.log("timeupdate");
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    //console.log(progress);
    myProgresssBar.value = progress;
})

myProgresssBar.addEventListener("change" ,()=>{
    audioElement.currentTime = myProgresssBar.value * audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}



Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
    element.addEventListener('click' , (e) =>{
        // console.log(e.target);
        makeAllPlay();
        mastersongname.innerText = songs[songIndex+1].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// controls of left and right button

document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex >= 9){
         songIndex = 0;
    }
     else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 })

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
