
// Reveal sections when they come into view
const sections = document.querySelectorAll('.chapter-section');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
            const image = section.querySelector('.revealing-image');
            image && image.classList.add('visible');
        }
    });

    // Show or hide the Scroll-to-Top button based on the scroll position
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Fullscreen Toggle Function
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Auto Scroll Function
let scrolling;
function autoScroll() {
    if (scrolling) {
        clearInterval(scrolling);
        scrolling = null;
    } else {
        scrolling = setInterval(() => {
            window.scrollBy(0, 2); // Adjust speed here
        }, 50);
    }
}

// Scroll to top functionality
scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

 // Scroll to specific chapter
 function scrollToChapter(chapterId) {
const element = document.getElementById(chapterId);
if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}


// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '200px'; // Set to desired width
    } else {
        sidebar.style.width = '0'; // Hide the sidebar
    }
}

// Initialize the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const target = entry.target;
        target.classList.add('visible');

        // Reveal images after chapter content
        if (target.classList.contains('chapter-content')) {
        const images = target.querySelectorAll('.revealing-image');
        images.forEach((img, i) => {
            setTimeout(() => {
            img.classList.add('visible');
            }, 1000 + i * 300); // stagger if there are multiple
        });
        }
    }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.chapter-title, .chapter-content').forEach(el => {
    observer.observe(el);
});



// Function to get the query string value
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Scroll to the chapter on page load
window.addEventListener('DOMContentLoaded', () => {
    const chapterId = getQueryParam('chapter'); // e.g., 'chapter1', 'chapter2', etc.
    if (chapterId) {
    const target = document.getElementById(chapterId);
    if (target) {
        // Delay to allow layout to finish rendering
        setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
        }, 200); // You can adjust the delay if needed
    }
    }
});


// Compass Interactivity
const rotationInput = document.getElementById("compass-rotation");
const compass = document.getElementById("compass");
const compassValue = document.getElementById("compass-value");

rotationInput.addEventListener("input", function () {
    const degrees = this.value;
    compass.style.transform = `translate(-50%, -50%) rotate(${degrees}deg)`;
    compassValue.textContent = degrees;
});

// Compass rotating linked to flashback panels

document.getElementById('compass-rotation').addEventListener('input', function() {
// Add the 'visible' class to the flashback panels when the compass is rotated
document.querySelectorAll('.flashback-panels').forEach(function(panel) {
    panel.classList.add('visible');
});
});



