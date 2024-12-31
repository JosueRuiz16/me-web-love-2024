document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animate-button');
    const animationArea = document.querySelector('.animation-area');

    button.addEventListener('click', () => {
        animationArea.classList.toggle('hidden');
        if (!animationArea.classList.contains('hidden')) {
            button.textContent = 'Ocultar la sorpresa';
        } else {
            button.textContent = 'Presiona para ver una sorpresa';
        }
    });

    // Additional animation for Hello Kitty image
    const kittyImage = document.querySelector('.kitty');
    kittyImage.addEventListener('mouseover', () => {
        kittyImage.classList.add('bounce');
    });
    kittyImage.addEventListener('mouseout', () => {
        kittyImage.classList.remove('bounce');
    });

    // Smooth scroll between sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive adjustments
    const adjustForMobile = () => {
        const viewportWidth = window.innerWidth;
        const card = document.querySelector('.card');

        if (viewportWidth <= 768) {
            card.style.width = '95%';
            card.style.padding = '15px';
        } else {
            card.style.width = '90%';
            card.style.padding = '20px';
        }
    };

    window.addEventListener('resize', adjustForMobile);
    adjustForMobile();
});
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            // Remove enlarged class from all images
            images.forEach(image => image.classList.remove('enlarged'));

            // Toggle the enlarged class on the clicked image
            img.classList.toggle('enlarged');
        });
    });
});
