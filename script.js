// script.js

// Example of adding interactive functionality with JavaScript (optional)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
