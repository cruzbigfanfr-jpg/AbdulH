// ===== Fade Animation =====
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.6s ease";
        document.body.style.opacity = "1";
    }, 100);
});

// ===== Page Transition =====
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ) {
            e.preventDefault();

            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }

    });
});

// ===== Mouse Glow =====
const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "220px";
glow.style.height = "220px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(40,120,255,.35), transparent 70%)";
glow.style.transform = "translate(-50%,-50%)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// ===== Floating Effect =====
const hero = document.querySelector(".hero");

let up = true;

setInterval(() => {

    if (!hero) return;

    hero.style.transform =
        up ? "translateY(-8px)" : "translateY(8px)";

    up = !up;

}, 2000);

// ===== Dark / Light Toggle =====
const moon = document.querySelector(".theme");

moon.addEventListener("click", () => {

    document.body.classList.toggle("light");

});
