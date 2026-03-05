const modalCall = () => {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.fancyboxModal') || e.target.closest('#btn-call');

        if (btn) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const modal = document.querySelector('.header-modal');
            const overlay = document.querySelector('.overlay');

            if (modal && overlay) {
                modal.style.cssText = `
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    z-index: 100000 !important;
                `;
                overlay.style.display = 'block';
                overlay.style.zIndex = '99999';

                document.body.style.overflow = 'hidden';
            }
        }

        if (e.target.classList.contains('header-modal__close') || e.target.classList.contains('overlay')) {
            const modals = document.querySelectorAll('.header-modal');
            modals.forEach(m => m.style.display = 'none');
            document.querySelector('.overlay').style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default modalCall;
