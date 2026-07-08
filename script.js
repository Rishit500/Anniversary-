// ===============================
// 365 Days Of Us ❤️
// Part 1C
// ===============================


// Loading Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },1000);

    },2500);

});




// Floating Hearts

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);




// Relationship Counter

const startDate = new Date("2025-07-14T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("days").innerHTML =

    `${days} Days ❤️ <br>
     ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

updateCounter();

setInterval(updateCounter,1000);




// Music Button

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Our Song";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Our Song";

        playing=false;

    }

});




// Start Button

document.getElementById("startBtn").addEventListener("click",()=>{

    document.querySelector(".about").scrollIntoView({

        behavior:"smooth"

    });

});
// ===============================
// Premium Hero Button
// ===============================

const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector(".about").scrollIntoView({

            behavior: "smooth"

        });

    });

}
// ================= MEMORY BOOK =================
console.log("Memory Book Loaded");
const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");

let currentPage = 0;

function showPage(index){

    pages.forEach(page => page.classList.remove("active"));

    pages[index].classList.add("active");

}

nextBtn.addEventListener("click", ()=>{

    currentPage++;

    if(currentPage >= pages.length){

        currentPage = 0;

    }

    showPage(currentPage);

});

prevBtn.addEventListener("click", ()=>{

    currentPage--;

    if(currentPage < 0){

        currentPage = pages.length - 1;

    }

    showPage(currentPage);

});
