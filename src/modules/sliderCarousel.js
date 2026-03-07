const sliderCarousel = () => {
    document.addEventListener('DOMContentLoaded', () => {

        const initSlider = (trackSelector, prevBtnSelector, nextBtnSelector, animationDuration = 400) => {
            const track = document.querySelector(trackSelector);
            const btnPrev = document.querySelector(prevBtnSelector);
            const btnNext = document.querySelector(nextBtnSelector);

            if (!track || !btnPrev || !btnNext) return;

            let isAnimating = false;

            const moveNext = () => {
                if (isAnimating) return;
                isAnimating = true;

                const itemWidth = track.firstElementChild.getBoundingClientRect().width;

                track.style.transition = `transform ${animationDuration}ms ease-in-out`;
                track.style.transform = `translateX(-${itemWidth}px)`;

                track.addEventListener('transitionend', function handler(e) {
                    if (e.propertyName !== 'transform') return;

                    track.removeEventListener('transitionend', handler);

                    track.style.transition = 'none';
                    track.appendChild(track.firstElementChild);
                    track.style.transform = 'translateX(0)';

                    isAnimating = false;
                });
            };

            const movePrev = () => {
                if (isAnimating) return;
                isAnimating = true;

                const itemWidth = track.firstElementChild.getBoundingClientRect().width;

                track.style.transition = 'none';
                track.prepend(track.lastElementChild);
                track.style.transform = `translateX(-${itemWidth}px)`;

                track.offsetHeight;

                track.style.transition = `transform ${animationDuration}ms ease-in-out`;
                track.style.transform = 'translateX(0)';

                track.addEventListener('transitionend', function handler(e) {
                    if (e.propertyName !== 'transform') return;

                    track.removeEventListener('transitionend', handler);
                    isAnimating = false;
                });
            };

            btnNext.addEventListener('click', moveNext);
            btnPrev.addEventListener('click', movePrev);
        };

        initSlider('.benefits-wrap', '.benefits__arrow--left', '.benefits__arrow--right');
        initSlider('#sliderTrack', '#btnPrev', '#btnNext');
    });
};

export default sliderCarousel;