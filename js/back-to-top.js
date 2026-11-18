document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".back-to-top");
    if (!button) return;

    const showAfter = 300;

    const updateButton = () => {
        button.classList.toggle("is-visible", window.scrollY > showAfter);
    };

    window.addEventListener("scroll", updateButton, { passive: true });
    updateButton();

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
