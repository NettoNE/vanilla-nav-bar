document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.js-nav-links');
    const mobileMenuBtn = document.querySelector('.js-mobile-menu-btn');
    const mobileMenuIcon = document.querySelector('.js-mobile-menu-icon');

    // menu button logic  
    mobileMenuBtn.addEventListener('click', () => {

        navLinks.classList.toggle('is-active');

        // change fonte awesome icon
        mobileMenuIcon.classList.toggle('fa-bars');
        mobileMenuIcon.classList.toggle('fa-xmark');
    })

});


