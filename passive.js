// Update year automatically
document.addEventListener("DOMContentLoaded", () => {
    let CurrentYear = new Date().getFullYear();
    document.getElementById("copyright-legal").textContent = "© " + CurrentYear + " GeoFlame Studios";
});

// Preload images because YES
const ImagesToPreload = ['images/Logo.png', 'images/Background.png'];
ImagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
});
