document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector('.slides');
    let currentIndex = 0;

    function showSlide(index) {
      const newPosition = -index * 100 + '%';
      slidesContainer.style.transform = 'translateX(' + newPosition + ')';
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % 5; // Adjust based on the number of images
      showSlide(currentIndex);
    }

    // Change slide every 3 seconds (adjust the interval as needed)
    setInterval(nextSlide, 3000);
  });

  function toggleSelected(card) {
    card.classList.toggle('selected');
  }