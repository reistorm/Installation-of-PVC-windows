const certificatesModal = () => {
    const certLinks = document.querySelectorAll('.sertificate-document');

    if (certLinks.length === 0) return;

    const overlay = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalImage = document.createElement('img');
    const closeBtn = document.createElement('span');

    overlay.classList.add('custom-modal-overlay');
    modalContent.classList.add('custom-modal-content');
    closeBtn.classList.add('custom-modal-close');
    closeBtn.innerHTML = 'x';

    modalContent.append(closeBtn, modalImage);
    overlay.append(modalContent);
    document.body.append(overlay);

    const style = document.createElement('style');
    style.innerHTML = `
        .custom-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
            z-index: 9999;
            display: flex;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        .custom-modal-overlay.is-open {
            opacity: 1;
            visibility: visible;
        }

        .custom-modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90vh;
        }
        .custom-modal-content img {
            max-width: 100%;
            max-height: 90vh;
            display: block;
            border-radius: 4px;
        }
        .custom-modal-close {
            position: absolute;
            top: -30px;
            right: -30px;
            color: #fff;
            font-size: 40px;
            cursor: pointer;
            line-height: 1;
        }
        @media (max-width: 768px) {
            .custom-modal-close {
                top: 5px; right: 10px;
                text-shadow: 0 0 5px black;
            }
        }
    `;
    document.head.append(style);

    certLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const largeImageUrl = link.getAttribute('href');

            modalImage.src = largeImageUrl;

            overlay.classList.add('is-open');
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        setTimeout(() => { modalImage.src = ''; }, 300);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('is-open');
            setTimeout(() => { modalImage.src = ''; }, 300);
        }
    });
};

export default certificatesModal;