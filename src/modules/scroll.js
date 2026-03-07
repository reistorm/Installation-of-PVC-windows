const scroll = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const scrollBtn = document.querySelector('.smooth-scroll');

        const checkScrollPosition = () => {
            const firstSectionHeight = window.innerHeight;

            const currentScroll = window.scrollY;

            if (currentScroll > firstSectionHeight) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', checkScrollPosition);

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        checkScrollPosition();
    });
}

export default scroll