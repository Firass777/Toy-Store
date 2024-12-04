const smoothScrollToSection = (link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        const topPosition = targetSection.getBoundingClientRect().top + window.scrollY; 

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth' 
        });
    });
};

document.querySelectorAll('.nav-links a').forEach(link => {
    smoothScrollToSection(link);
});

const shopNowButton = document.querySelector('.btn-shop-now'); 
if (shopNowButton) {
    smoothScrollToSection(shopNowButton);
}
