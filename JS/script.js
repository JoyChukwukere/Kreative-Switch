// script.js

document.addEventListener("DOMContentLoaded", function() {
    const scroller = document.querySelector('.scroller');
    const scrollContents = document.querySelectorAll('.scroll-content');

    // Clone each scroll-content and append to the scroller
    scrollContents.forEach(content => {
        const clone = content.cloneNode(true);
        scroller.appendChild(clone);
    });
});
