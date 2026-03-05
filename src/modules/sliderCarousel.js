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

                setTimeout(() => {
                    track.style.transition = 'none';
                    track.appendChild(track.firstElementChild);
                    track.style.transform = 'translateX(0)';

                    isAnimating = false;
                }, animationDuration);
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

                setTimeout(() => {
                    isAnimating = false;
                }, animationDuration);
            };

            btnNext.addEventListener('click', moveNext);
            btnPrev.addEventListener('click', movePrev);
        };

        initSlider('.benefits-wrap', '.benefits__arrow--left', '.benefits__arrow--right');
        initSlider('#sliderTrack', '#btnPrev', '#btnNext');
    });
};

export default sliderCarousel;