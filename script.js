// Get the header element by its ID
const header = document.getElementById("en-tete");
// Select the first <header> element in the document
const fullHeader = document.querySelector("header");

// Handle scroll event to add or remove the 'scrolled' class based on scroll position
function handleScroll() {
  // If the user has scrolled more than the viewport height minus 30px
  if (window.scrollY > window.innerHeight - 30) {
    header.classList.add("scrolled"); // Add 'scrolled' class for styling
  } else {
    header.classList.remove("scrolled"); // Remove 'scrolled' class when near the top
  }
}

// Handle resize event to adjust header classes for responsive design
function handleResize() {
  // For mobile devices (width <= 768px)
  if (window.innerWidth <= 768) {
    fullHeader.classList.add("scrolled", "position-fixed"); // Fix header at the top and apply scrolled style
    fullHeader.classList.remove("position-absolute"); // Remove absolute positioning
  } else {
    // For larger screens
    fullHeader.classList.remove("scrolled"); // Remove scrolled style
    fullHeader.classList.remove("position-fixed"); // Remove fixed positioning
    fullHeader.classList.add("position-absolute"); // Use absolute positioning for desktop layout
  }
}

// Event listeners
window.addEventListener("scroll", handleScroll); // Update header style on scroll
window.addEventListener("resize", handleResize); // Adjust header classes on window resize
window.addEventListener("load", handleResize);   // Ensure correct header style on initial load
