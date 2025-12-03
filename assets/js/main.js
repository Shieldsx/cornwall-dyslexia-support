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

let currentTheme = "light"; // start in light mode

themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Toggle theme variable
        currentTheme = currentTheme === "light" ? "dark" : "light";

        // Apply theme to the <html> tag
        document.documentElement.setAttribute("data-theme", currentTheme);

        // Update icons
        themeButtons.forEach(b => {
            b.textContent = currentTheme === "light" ? "🌙" : "☀️";
        });
    });
});


