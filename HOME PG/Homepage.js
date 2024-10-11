//banner

let currentIndex = 0;
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}


setInterval(nextSlide, 6000); // Change slide every 3 seconds

// Initialize the first slide
showSlide(currentIndex);

//----------------------


// 2nd banner card

const carousel1 = document.querySelector('.deals-items');
        const leftArrow1 = document.querySelector('.slide-arrow.left');
        const rightArrow1 = document.querySelector('.slide-arrow.right');
        let isScrolling1 = false;

        // Clone the items to create a looping effect
        const cloneItems1 = () => {
            const items = carousel1.querySelectorAll('.item');
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carousel1.appendChild(clone);
            });
        };

        cloneItems1();

        const scrollLeft1 = () => {
            if (isScrolling) return;
            isScrolling = true;
            carousel1.scrollBy({ left: -100, behavior: 'smooth' });

            setTimeout(() => {
                if (carousel1.scrollLeft <= 0) {
                    carousel1.scrollLeft += carousel1.scrollWidth / 2;
                }
                isScrolling = false;
            }, 700); // Adjust timing as needed
        };

        const scrollRight1 = () => {
            if (isScrolling) return;
            isScrolling = true;
            carousel1.scrollBy({ left: 100, behavior: 'smooth' });

            setTimeout(() => {
                if (carousel1.scrollLeft + carousel1.clientWidth >= carousel1.scrollWidth) {
                    carousel1.scrollLeft -= carousel1.scrollWidth / 2;
                }
                isScrolling = false;
            }, 700); // Adjust timing as needed
        };

        leftArrow1.addEventListener('click', scrollLeft1);
        rightArrow1.addEventListener('click', scrollRight1);

        // Automatic scrolling
        setInterval(() => {
            scrollRight1();
        }, 3000); // Change 3000 to your desired scroll interval in milliseconds

//silde logic....................

const carousel = document.querySelector('.product-carousel');
        const leftArrow = document.querySelector('.nav-arrow.left');
        const rightArrow = document.querySelector('.nav-arrow.right');
        let isScrolling = false;

        // Clone the items to create a looping effect
        const cloneItems = () => {
            const items = carousel.querySelectorAll('.product');
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carousel.appendChild(clone);
            });
        };

        cloneItems();

        const scrollLeft = () => {
            if (isScrolling) return;
            isScrolling = true;
            carousel.scrollBy({ left: -300, behavior: 'smooth' });

            setTimeout(() => {
                if (carousel.scrollLeft <= 0) {
                    carousel.scrollLeft += carousel.scrollWidth / 2;
                }
                isScrolling = false;
            }, 700); // Adjust timing as needed
        };

        const scrollRight = () => {
            if (isScrolling) return;
            isScrolling = true;
            carousel.scrollBy({ left: 300, behavior: 'smooth' });

            setTimeout(() => {
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                    carousel.scrollLeft -= carousel.scrollWidth / 2;
                }
                isScrolling = false;
            }, 700); // Adjust timing as needed
        };

        leftArrow.addEventListener('click', scrollLeft);
        rightArrow.addEventListener('click', scrollRight);
        
       


        //-------------------best selling card------------------

        const carousel2 = document.querySelector('.product-carousel2');
        const leftArrow2 = document.querySelector('.nav-arrow.left2');
        const rightArrow2 = document.querySelector('.nav-arrow.right2');
        let isScrolling2 = false;

        // Clone the items to create a looping effect
        const cloneItems2 = () => {
            const items = carousel2.querySelectorAll('.product2');
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carousel2.appendChild(clone);
            });
        };

        cloneItems2();

        const scrollLeft2 = () => {
            if (isScrolling2) return;
            isScrolling2 = true;
            carousel2.scrollBy({ left: -700, behavior: 'smooth' });

            setTimeout(() => {
                if (carousel2.scrollLeft <= 0) {
                    carousel2.scrollLeft += carousel2.scrollWidth / 2;
                }
                isScrolling2 = false;
            }, 700); // Adjust timing as needed
        };

        const scrollRight2 = () => {
            if (isScrolling2) return;
            isScrolling2 = true;
            carousel2.scrollBy({ left: 700, behavior: 'smooth' });

            setTimeout(() => {
                if (carousel2.scrollLeft + carousel2.clientWidth >= carousel2.scrollWidth) {
                    carousel2.scrollLeft -= carousel2.scrollWidth / 2;
                }
                isScrolling2 = false;
            }, 700); // Adjust timing as needed
        };

        leftArrow2.addEventListener('click', scrollLeft2);
        rightArrow2.addEventListener('click', scrollRight2);

        setInterval(() => {
            scrollRight2();
        }, 3000);