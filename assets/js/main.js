// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// SIMPLE LIGHT/DARK THEME TOGGLE
const themeButtons = document.querySelectorAll("#themeToggleFloating");

// Start in light mode

let currentTheme = "light";

themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";

        // Toggle body classes
        document.body.classList.toggle("theme-light", currentTheme === "light");
        document.body.classList.toggle("theme-dark", currentTheme === "dark");

        // Update icons on both buttons
        themeButtons.forEach(b => {
            b.textContent = currentTheme === "light" ? "🌙" : "☀️";
        });
    });
});


