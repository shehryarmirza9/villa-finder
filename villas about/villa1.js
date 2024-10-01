document.addEventListener("DOMContentLoaded", function () {
    const villaCards = document.querySelectorAll('.villa-card');

    villaCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove hover effect from all cards
            villaCards.forEach(v => v.classList.remove('hover-effect'));

            // Add hover effect to the clicked card
            card.classList.add('hover-effect');
        });

        // Handle right-click to remove the hover effect
        card.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Prevent the default context menu from appearing
            card.classList.remove('hover-effect'); // Remove the hover effect class
        });
    });

    // Show contact form on button click
    const contactBtn = document.querySelector('.contact-btn');
    const contactForm = document.querySelector('.contact-form');

    contactBtn.addEventListener('click', () => {
        contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
    });
});
