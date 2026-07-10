// ===============================
// 365 Days Of Us ❤️
// script.js
// ===============================

// -------------------------------
// Loading Screen
// -------------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }

    }, 1200);

});

// -------------------------------
// Floating Hearts
// -------------------------------

const hearts = document.getElementById("hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

if (hearts) {

    setInterval(createHeart, 350);

}

// -------------------------------
// Relationship Counter
// -------------------------------

const startDate = new Date("2025-07-14T00:00:00");

function updateCounter() {

    const daysElement = document.getElementById("days");

    if (!daysElement) return;

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    daysElement.innerHTML =
        `${days} Days ❤️<br>${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

updateCounter();

setInterval(updateCounter, 1000);

// -------------------------------
// Music Button
// -------------------------------

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (music && musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.play();

            musicBtn.innerHTML = "⏸ Pause Our Song";

            playing = true;

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵 Play Our Song";

            playing = false;

        }

    });

}

// -------------------------------
// Explore Button
// -------------------------------

const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        const about = document.querySelector(".about");

        if (about) {

            about.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

// -------------------------------
// Memory Book
// -------------------------------

console.log("Memory Book Loaded");

const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextPage");

const prevBtn = document.getElementById("prevPage");

let currentPage = 0;

function showPage(index) {

    pages.forEach(page => page.classList.remove("active"));

    if (pages[index]) {

        pages[index].classList.add("active");

    }

}

if (nextBtn && prevBtn && pages.length > 0) {

    nextBtn.addEventListener("click", () => {

        currentPage++;

        if (currentPage >= pages.length) {

            currentPage = 0;

        }

        showPage(currentPage);

    });

    prevBtn.addEventListener("click", () => {

        currentPage--;

        if (currentPage < 0) {

            currentPage = pages.length - 1;

        }

        showPage(currentPage);

    });

}
// ================= LOVE LETTER =================

const letter = `

My Dearest Anisha, ❤️

365 days...
Aur sach kahun?

Agar kisi ne mujhe ek saal pehle bola hota ki jis ladki se main itna ladta hoon, wahi meri poori duniya ban jayegi...
toh shayad main kabhi believe hi nahi karta.

Humari story kisi fairy tale ki tarah shuru nahi hui thi.

Pehle arguments the...
Taunts the...
Ego tha...
Aur shayad thodi si nafrat bhi. 😅

Lekin shayad isi liye humari story itni special hai.

Dheere dheere woh fights conversations ban gayi...
Conversations smiles ban gayi...
Aur smiles... pyaar mein badal gayi. ❤️

Aaj jab main peeche mudkar dekhta hoon,
toh lagta hai ki har chhoti si fight,
har misunderstanding,
aur har coincidence humein ek dusre tak lane ke liye hi tha.

Thank you meri jaan... ❤️

Mere mood swings handle karne ke liye...
Meri bakwaas sunne ke liye...
Mujhe samajhne ke liye jab main khud ko bhi nahi samajh pata...
Aur meri life ke har ordinary din ko beautiful memory banane ke liye.

Hum ladte hain...
Kabhi kabhi bahut zyada. 😂

Lekin ek baat kabhi nahi badli...

Din ke end mein,
meri first thought bhi tum ho...
aur meri last smile bhi tumhari wajah se hoti hai.

Tum sirf meri girlfriend nahi ho...

Tum meri best friend ho.
Meri comfort ho.
Meri peace ho.
Aur meri favourite place ho. 🫂❤️

Aaj humari love story ka sirf Chapter One complete hua hai.

Main chahta hoon ki aage aur bhi hazaar chapters likhein...

Aur har chapter mein sirf ek hi heroine ho...

Tum. ❤️

Happy First Anniversary,
Meri Love. 💖

From Enemies ➜ Best Friends ➜ Soulmates ✨

Forever Yours,
P.S. —
No matter how many anniversaries we celebrate,
I'll always choose you.
Again.
Again.
And forever. ❤️
Rishit ❤️

`;

const typingText = document.getElementById("typingText");

let index = 0;

function typeLetter() {

    if (!typingText) return;

    if (index < letter.length) {

        typingText.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    }

}


// ================= YES / NO GAME =================

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

let yesScale = 1;

if (noBtn && yesBtn) {

 noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;

    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

    if (yesScale < 2) {

        yesScale += 0.05;

        yesBtn.style.transform = `scale(${yesScale})`;

    }

});

        yesBtn.addEventListener("click", () => {

    const celebration = document.createElement("div");

    celebration.className = "celebration";

    celebration.innerHTML = `
        <h1>🎉 Happy First Anniversary ❤️</h1>

<h2>Miss. Clumsy ❤️</h2>

<p>

365 beautiful days...

Countless smiles...

Thousands of memories...

And a lifetime of love still waiting for us.

<br><br>

From Enemies ➜ Best Friends ➜ Soulmates ❤️

<br><br>

Thank you for choosing me every single day.

I promise to keep loving you,

making you laugh,

annoying you,

protecting you,

and standing beside you forever.

<br><br>

I Love You. ❤️
</p>

    `;

    document.body.appendChild(celebration);
            confetti({

    particleCount:250,

    spread:180,

    origin:{y:0.6}

});
            setTimeout(()=>{

    celebration.remove();

    const finalScreen = document.getElementById("finalScreen");

    finalScreen.style.display = "flex";
// ⭐ Stars

for(let i=0;i<80;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    finalScreen.appendChild(star);

}

// ❤️ Hearts

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="finalHeart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    finalScreen.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

},300);
    document.getElementById("finalTitle").innerHTML =
    "❤️ Happy First Anniversary ❤️";
   
// 👇 Paste it HERE
document.getElementById("finalTitle").style.cursor = "pointer";

document.getElementById("finalTitle").addEventListener("click", () => {

    document.getElementById("secretMessage").style.display = "block";

});


    document.getElementById("finalSubtitle").innerHTML =
    "My Dearest Anisha";

    
        const finalText =


`14 July 2025

↓

Forever

❤️

From Enemies

↓

Best Friends

↓

Soulmates

❤️

This isn't the end...

It's only Chapter One.

Forever Yours,

Mr. Khadoos ❤️`;
const message = document.getElementById("finalMessage");

if(message){

message.innerHTML="";

let i=0;

function typeFinal(){

    if(i<finalText.length){

        message.innerHTML+=finalText.charAt(i);

        i++;

        setTimeout(typeFinal,45);

    }

}

typeFinal();

}

                setTimeout(()=>{

    const music=document.getElementById("bgMusic");

    if(music){

        let volume=1;

        const fade=setInterval(()=>{

            volume-=0.05;

            if(volume<=0){

                music.pause();

                clearInterval(fade);

            }

            else{

                music.volume=volume;

            }

        },500);

    }

},20000);

},6000);

});
}
// =======================================
// PREMIUM SCROLL ANIMATION
// =======================================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);
// ================= OPEN LETTER =================

const openLetter=document.getElementById("openLetter");

const letterCard=document.getElementById("letterCard");

if(openLetter){

    openLetter.addEventListener("click",()=>{

        document.querySelector(".envelopeBox").style.display="none";

        letterCard.style.display="block";

        typingText.innerHTML="";

        index=0;

        typeLetter();

    });

}
