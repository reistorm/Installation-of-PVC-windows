const modalCall = () => {
    const overlay = document.querySelector('.overlay');

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.fancyboxModal');

        if (btn) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const href = btn.getAttribute('href');
            let modal = null;

            if (href === '#callback') {
                modal = document.querySelector('.header-modal');
            } else if (href === '#application') {
                modal = document.querySelector('.services-modal');
            }

            if (modal && overlay) {
                modal.style.cssText = `
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    z-index: 100000 !important;
                    position: fixed !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                `;

                overlay.style.display = 'block';
                overlay.style.zIndex = '99999';

                document.body.style.overflow = 'hidden';
            }
        }

        const isCloseBtn = e.target.closest('.header-modal__close') ||
            e.target.closest('.services-modal__close');
        const isOverlay = e.target.classList.contains('overlay');

        if (isCloseBtn || isOverlay) {
            const modals = document.querySelectorAll('.header-modal, .services-modal');
            modals.forEach(m => m.style.display = 'none');

            if (overlay) overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default modalCall;
