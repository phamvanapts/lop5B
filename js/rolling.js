// Theo dõi sự kiện cuộn (scrolling)
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Khi cuộn xuống > 50px
    navbar.classList.add('scrolled'); // Thu gọn navbar
  } else {
    navbar.classList.remove('scrolled'); // Trả về trạng thái ban đầu
  }
});
// Mở hoặc đóng menu khi nhấn vào biểu tượng
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

  