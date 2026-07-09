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

            }, 1000);

        }

    }, 2500);

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

typeLetter();
// ================= YES / NO GAME =================

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

let yesScale = 1;

if (noBtn && yesBtn) {

    noBtn.addEventListener("mouseover", () => {

        const maxX = window.innerWidth - 180;

        const maxY = 250;

        const x = Math.random() * maxX;

        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";

        noBtn.style.top = y + "px";

        yesScale += 0.08;

        yesBtn.style.transform = `scale(${yesScale})`;

    });

    yesBtn.addEventListener("click", () => {

        document.body.innerHTML = `

        <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        background:linear-gradient(135deg,#ff7eb3,#ff758c,#ffc3a0);
        color:white;
        font-family:Poppins,sans-serif;
        ">

        <h1 style="font-size:70px;">🎉 YAYYYYY!! ❤️</h1>

        <h2>I knew you'd choose me! 🥹❤️</h2>

        <p style="font-size:28px;max-width:800px;padding:20px;line-height:1.8;">

        Happy First Anniversary Miss. Clumsy ❤️

        Thank you for choosing me every single day.

        I promise to keep loving you,

        annoying you,

        making you laugh,

        and standing beside you

        through every chapter of our story.

        I love you forever. ❤️

        <br><br>

        — Mr. Khadoos

        </p>

        </div>

        `;

    });

}
