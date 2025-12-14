var arr=[
    {SongName: "Saiyaara", url:"songs/Saiyaara.mp3",img:"https://i.scdn.co/image/ab67616d0000b273a7e251b543c77a6ed356dfbe",time:"6:00"},
    {SongName: "Humsafar", url:"songs/Humsafar.mp3",img:"https://i.ytimg.com/vi/D9DiMnlpFK8/maxresdefault.jpg",time:"3:56"},
    {SongName: "Tum Ho Toh", url:"songs/Tum Ho Toh.mp3",img:"https://i.ytimg.com/vi/rOUuGvJkBrQ/maxresdefault.jpg",time:"5:56"},
    {SongName: "Barbaad", url:"songs/Barbaad.mp3",img:"https://m.timesofindia.com/photo/121775885/size-141760/121775885.jpg",time:"4:56"},
    {SongName: "Dhun", url:"songs/Dhun.mp3",img:"https://thelyricsgenie.com/wp-content/uploads/2025/07/Dhun-Song-Lyrics-Saiyaara-Lyrics.webp",time:"5:00"},
]

var audio=new Audio()
var allsongs=document.querySelector("#all-songs")

var selectedsong=0

var poster=document.querySelector("#left")

function mainfunction(){
    var clutter="" 
    arr.forEach(function(elem, index){
        clutter+=`<div class="song-card " id=${index}>
    <div class="part1">
        <img src= ${elem.img} alt="">
        <h2>${elem.SongName}</h2>
                        
    </div>
    <h6>${elem.time}</h6>
</div>`
    })
    allsongs.innerHTML=clutter
    audio.src = arr[selectedsong].url
    poster.style.backgroundImage =`url(${arr[selectedsong].img})`
    
}
mainfunction()


allsongs.addEventListener("click",function(dets){
    selectedsong=dets.target.id
    mainfunction()
    play.innerHTML= `<i class="ri-pause-mini-fill"></i>`
    flag=1
    audio.play()
})
 
var flag=0
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML= `<i class="ri-pause-mini-fill"></i>`
        mainfunction()
        audio.play()
        flag=1;

    }
    else{
        play.innerHTML= `<i class="ri-play-mini-fill"></i>`
        mainfunction()
        audio.pause()
        flag=0;
    }
})
forward.addEventListener("click",function(){
    if(selectedsong < arr.length-1){
        selectedsong++
        mainfunction()
        audio.play()
    }
    else{
        forward.style.opacity=0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedsong>0){
        selectedsong--
        mainfunction()
        audio.play()
    }
    else{
        backward.style.opacity=0.4
    }
})
