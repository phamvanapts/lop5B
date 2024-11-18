// JavaScript for Sticky and Compact Nav
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    });
  });
  