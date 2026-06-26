const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.title =
                entry.target.querySelector("h2").innerText + " - Tutorial VPN";
        }
    });
});

sections.forEach((section) => observer.observe(section));

const modal = document.createElement("div");
modal.className = "image-modal";

const modalImg = document.createElement("img");

modal.appendChild(modalImg);
document.body.appendChild(modal);

document.querySelectorAll("img").forEach((img) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("active");
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});