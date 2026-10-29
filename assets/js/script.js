// script.js
const scroll = ScrollReveal({
  reset: true,
  duration: 2600,
  distance: "60px",
  
});

scroll.reveal(".image-transform", { delay: 400, origin: "top" });
scroll.reveal(".text-transform", { delay: 300, origin: "right" });
scroll.reveal(".second-text-transform", { delay: 200, origin: "bottom" });

const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      // Styles when scrolled (Transparent / Blur)
      navbar.classList.remove('bg-indigo-950', 'shadow-md');
      navbar.classList.add('bg-transparent', 'backdrop-blur-md'); 
    } else {
      // Default styles at the very top
      navbar.classList.remove('bg-transparent', 'backdrop-blur-md');
      navbar.classList.add('bg-indigo-950', 'shadow-md');
    }
  });

