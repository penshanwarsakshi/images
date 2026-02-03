const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
    message.innerHTML = "YAYYYY 💍❤️ I love you so much!";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 100;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
