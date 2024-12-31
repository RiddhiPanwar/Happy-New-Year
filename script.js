// Function to change the year from "2024" to "2025" after 5 seconds
setTimeout(() => {
    const yearElement = document.getElementById('year');
    const messageElement = document.getElementById('message');
  
    // Change the year from 2024 to 2025
    yearElement.innerHTML = '2025🎊';
  
    // Change the message to "Happy New Year 2025"
    messageElement.innerHTML = '<h1>🎉Happy New Year🎉</h1>';
  }, 4000);
  
  // Function to create stars and animations
  function createStars() {
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 2}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      document.body.appendChild(star);
    }
  }
  
  // Function to create fireworks (crackers)
  function createFireworks() {
    setInterval(() => {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(firework);
  
      // Remove the firework after animation
      setTimeout(() => {
        firework.remove();
      }, 1000);
    }, 1000);  // Create a new firework every second
  }
  
  createStars();
  createFireworks();
  