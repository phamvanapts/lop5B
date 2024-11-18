// Fetch teacher data
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const teacherSection = document.getElementById('teacher-profile');
    const teacherData = data.teacher; // Dữ liệu về cô chủ nhiệm

    if (teacherData) {
      const teacherCard = `
        <img src="images/${teacherData.photo}" alt="${teacherData.name}">
        <div class="teacher-info">
          <h3>${teacherData.name}</h3>
          <p>${teacherData.description}</p>
        </div>
      `;
      teacherSection.innerHTML = teacherCard;
    }
  })
  .catch(error => console.error('Error loading teacher data:', error));
