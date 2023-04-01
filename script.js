const swich = document.getElementById("btn")
const swich2 = document.getElementById("close")
const close = document.getElementById("close2")
const img = document.getElementById("img")
var audio = new Audio('April fool banaya.mp3');


swich.addEventListener('click', open );
swich2.addEventListener('click',fool );
img.addEventListener('click',  fool );
close2.addEventListener('click', home);


 function open(){
    const blur = document.getElementById("blur")
    blur.classList.toggle("active")
     const popup = document.getElementById("popup")
     popup.classList.toggle("active")
    }

    function fool(){
        const clear = document.getElementById("clear")
        clear.classList.toggle("activate")
        const aprilFool = document.getElementById("popup2")
        aprilFool.classList.toggle("open")
        audio.play();
         

    }
     function home (){
        const aprilFool = document.getElementById("popup2")
        aprilFool.classList.toggle("open")
        const clear = document.getElementById("clear")
        clear.classList.toggle("activate")
        const popup = document.getElementById("popup")
        popup.classList.toggle("active")
        const blur = document.getElementById("blur")
        blur.classList.toggle("active")
        audio.pause() // important!!!
        audio.currentTime = 0
         
     }