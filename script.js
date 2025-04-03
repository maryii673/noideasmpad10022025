function spinCompass() {
    let compass = document.getElementById("compass");
    let title = document.getElementById("title");

    // Spin the compass slowly, like a real compass
    compass.style.transition = "transform 4s ease-out"; // Slow transition, 5 seconds
    compass.style.transform = "rotate(720deg)"; // Rotate four full circles (1440deg)

    // After the compass stops spinning, trigger the bounce animation on the title
    setTimeout(() => {
        title.classList.add("bounce");
    }, 4000); // Delay the title animation until the compass finishes spinning
}

// Example JavaScript function to toggle a menu when the map image is clicked
function toggleNavMenu() {
    // Toggle visibility of navigation menu when map is clicked
function toggleNavMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
}

// Smooth scrolling function for chapters
function scrollToChapter(chapter) {
    const section = document.getElementById(chapter);
    section.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("nav-menu").style.display = "none"; // Hide menu after selection
    }
}


