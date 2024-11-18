// Fetch data for album
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const albumContainer = document.getElementById('album-container');
  
        // Render all images from the JSON data
        data.images.forEach(image => {
          const card = document.createElement('div');
          card.className = 'album-card';
          card.innerHTML = `
            <img src="images/${image.url}" alt="${image.caption}">
            <div class="card-content">
              <h3>${image.caption}</h3>
              <p>Kỷ niệm đáng nhớ</p>
            </div>
          `;
          albumContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error loading album data:', error));
  });
  