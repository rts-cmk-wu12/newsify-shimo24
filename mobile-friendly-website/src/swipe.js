document.addEventListener('DOMContentLoaded', () => {
    const splashes = document.querySelectorAll('.splash');
    const dots = document.querySelectorAll('.dot');
    const skipButtons = document.querySelectorAll('.skip-button');
    const continueButtons = document.querySelectorAll('.continue-button');

    let currentIndex = 0;

    function showSplash(index) {
        splashes.forEach((splash, i) => {
            splash.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    // Show the first splash initially
    showSplash(currentIndex);

    // Continue button event listeners
    continueButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index < splashes.length - 1) {
                showSplash(index + 1);
            } else {
                alert('Continue button clicked!');
            }
        });
    });

    // Skip button event listeners
    skipButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('Skip button clicked!');
        });
    });

    // Auto transition between splashes
    setTimeout(() => showSplash(1), 3000);
    setTimeout(() => showSplash(2), 6000);
});
