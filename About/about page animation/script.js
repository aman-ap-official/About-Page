document.addEventListener('DOMContentLoaded', () => {
  const animationContainer = document.getElementById('animation-container');
  const aboutSection = document.getElementById('about-section');

  // Set a timeout for when the animation is done (after 4 seconds for two repetitions)
  setTimeout(() => {
    animationContainer.style.display = 'none'; // Hide the animation
    aboutSection.style.display = 'block'; // Show the about section
  }, 4000); // Total time for 2 animations (2s * 2 = 4s)
});
