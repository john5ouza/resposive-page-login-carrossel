document.addEventListener('DOMContentLoaded', () => {
    class SlideStories {
        constructor(slideElement) {
            this.slide = slideElement;
            this.slides = Array.from(this.slide.querySelectorAll('img'));
            this.activeIndex = 0;
            this.slideDuration = 6000;
            this.timer = null;
            this.init();
        }

        activeSlide(index) {
            this.slides.forEach((slide) => slide.classList.remove('active'));
            this.slides[index].classList.add('active');
            this.activeIndex = index;
            this.resetTimer();
            this.autoSlide();
        }

        next() {
            const nextIndex = (this.activeIndex + 1) % this.slides.length;
            this.activeSlide(nextIndex);
        }

        resetTimer() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }

        autoSlide() {
            this.timer = setInterval(() => {
                this.next();
            }, this.slideDuration);
        }

        init() {
            this.slides[0].classList.add('active');
            this.autoSlide();
        }
    }

    const slideElement = document.querySelector('.slide-items');
    if (slideElement) {
        new SlideStories(slideElement);
    }
});
