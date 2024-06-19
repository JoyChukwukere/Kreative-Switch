// script.js

// Global impact slider

document.addEventListener("DOMContentLoaded", function() {
    const scroller = document.querySelector('.scroller');
    const scrollContents = document.querySelectorAll('.scroll-content');
    const loader = document.getElementById("loader");
   loader.classList.remove("hidden");

    // Clone each scroll-content and append to the scroller
    scrollContents.forEach(content => {
        const clone = content.cloneNode(true);
        scroller.appendChild(clone);
    });
});

// loader


  document.addEventListener('DOMContentLoaded', (event) => {
    const loader = document.getElementById('loader');
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero-section');

    let navbarLoaded = false;
    let heroSectionLoaded = false;

    const checkIfLoaded = () => {
      if (navbarLoaded && heroSectionLoaded) {
        loader.style.display = 'none';
      }
    };

    navbar.addEventListener('load', () => {
      navbarLoaded = true;
      checkIfLoaded();
    });

    heroSection.addEventListener('load', () => {
      heroSectionLoaded = true;
      checkIfLoaded();
    });

    // Fallback in case load event doesn't fire
    setTimeout(() => {
      loader.style.display = 'none';
    }, 3000); // 3 seconds fallback
  });


  // subscriber form
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = {
      'email': document.getElementById('email').value
    };
    
    fetch('https://script.google.com/macros/s/AKfycbxHdIYLmG3c3IP0mOXBLJBgqrZ2kHutX-aqCQvCVM6sMIMYgrjyOjbBKhP31RrzZl66/exec', {
      method: 'POST',
      mode: 'cors', // Important: Set mode to 'cors' to handle CORS
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submission successful:', response);
        // Handle success or display confirmation to the user
      } else {
        throw new Error('Form submission failed:', response);
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      // Handle errors or display error message to the user
    });
  });
  
  

  



