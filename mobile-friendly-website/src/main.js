document.addEventListener('DOMContentLoaded', () => {
    const splash1 = document.getElementById('splash1');
    const splash2 = document.getElementById('splash2');
    const splash3 = document.getElementById('splash3');
    const skipButton = document.getElementById('skip-button');
    const continueButton = document.getElementById('continue-button');

    // Show first splash
    splash1.classList.add('active');

    // Transition to second splash after 3 seconds
    setTimeout(() => {
        splash1.classList.remove('active');
        splash2.classList.add('active');
    }, 3000);

    // Wait for 3 seconds on second splash
    setTimeout(() => {
        splash2.classList.remove('active');
        splash3.classList.add('active');
    }, 6000);

    // Button functionality
    skipButton.addEventListener('click', () => {
        splash3.classList.remove('active');
        alert('Skip button clicked!');
    });

    continueButton.addEventListener('click', () => {
        splash3.classList.remove('active');
        alert('Continue button clicked!');
    });
});
