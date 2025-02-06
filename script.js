function showFlower() {
    const messageIcon = document.getElementById('message-icon');
    const clickMeText = document.getElementById('click-me-text'); // Get the "Click me!" text
    const lyrics = document.getElementById('lyrics');
    const flowerMessage = document.getElementById('flower-message');
    const backgroundMusic = document.getElementById('background-music');

    // Hide the message icon
    messageIcon.style.display = 'none';

    // Hide the "Click me!" text
    clickMeText.style.display = 'none';

    // Show the lyrics
    lyrics.classList.remove('hidden');
    lyrics.style.opacity = '1'; // Ensure opacity is set to 1 for animation

    // Show the flower message
    flowerMessage.classList.remove('hidden');
    flowerMessage.style.opacity = '1'; // Ensure opacity is set to 1 for animation

    // Play the background music
    backgroundMusic.play();
}
