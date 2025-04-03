function spinCompass() {
    let compass = document.getElementById("compass");
    let title = document.getElementById("title");
    let startJourney = document.querySelector(".start-journey"); // Reference to the "Start Journey" section

    // Spin the compass slowly, like a real compass
    compass.style.transition = "transform 4s ease-out"; // Slow transition, 4 seconds
    compass.style.transform = "rotate(720deg)"; // Rotate two full circles (720deg)

    // After the compass stops spinning, trigger the bounce animation on the title
    setTimeout(() => {
        title.classList.add("bounce");
        
        // Trigger the slide-in animation for the "Start Journey" section
        startJourney.classList.add("slide-in"); // Add the class to trigger the animation
    }, 4000); // Delay the title animation until the compass finishes spinning
}

// Example JavaScript function to toggle a menu when the map image is clicked
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

// If you want to hide the "Start Journey" section after scrolling to the cover page
document.querySelector('.down-arrow').addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector('.start-journey').style.display = 'none';
        document.querySelector('.cover-page').style.display = 'block';
    }, 1000); // After 1 second delay, hide the button and show cover page

})





