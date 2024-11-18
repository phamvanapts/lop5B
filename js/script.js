fetch('../data/data.json')
  .then(response => response.json())
  .then(data => {
    // Render images into the carousel
    const imagesContainer = document.getElementById('images-container');
    data.images.forEach(image => {
      const img = document.createElement('img');
      img.src = `images/${image.url}`;
      img.alt = image.caption;
      imagesContainer.appendChild(img);
    });

    // Carousel Functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateCarousel() {
      const imageWidth = images[0].clientWidth;
      carouselTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Next Button
    nextBtn.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first image
      }
      updateCarousel();
    });

    // Previous Button
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = images.length - 1; // Loop back to the last image
      }
      updateCarousel();
    });

    // Resize Event Listener (Optional for Responsiveness)
    window.addEventListener('resize', updateCarousel);
    // video
    // Render videos
    const videosContainer = document.getElementById('videos-container');
    data.videos.forEach(video => {
      const videoFrame = document.createElement('div');
      videoFrame.className = 'video-card';
      videoFrame.innerHTML = `
        <iframe src="${video.url}" allowfullscreen></iframe>
        <p>${video.title}</p>
      `;
      videosContainer.appendChild(videoFrame);
    });
})
    .catch(error => console.error('Error loading data:', error));
// tự động chuyển imges
setInterval(() => {
    nextBtn.click();
}, 5000); // 5 giây
