
document.addEventListener("DOMContentLoaded", function () {

    function initializeCarousel(
        trackId,
        prevId,
        nextId,
        counterId,
        dotsId
    ) {
        const track = document.getElementById(trackId);
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nextId);
        const counter = document.getElementById(counterId);
        const dotsContainer = document.getElementById(dotsId);

        if (!track || !prev || !next) {
            console.error("Carousel elements missing:", trackId);
            return;
        }

        const slides = Array.from(track.children);
        const dots = dotsContainer
            ? Array.from(dotsContainer.querySelectorAll("button"))
            : [];

        const total = slides.length;
        let currentIndex = 0;

        if (total === 0) return;

        function updateCarousel() {

            track.style.transform =
                `translateX(-${currentIndex * 100}%)`;

            if (counter) {
                counter.textContent =
                    String(currentIndex + 1).padStart(2, "0") +
                    " / " +
                    String(total).padStart(2, "0");
            }

            dots.forEach((dot, index) => {
                dot.classList.toggle(
                    "active",
                    index === currentIndex
                );
            });
        }

        next.addEventListener("click", function (event) {
            event.preventDefault();

            currentIndex = (currentIndex + 1) % total;

            updateCarousel();
        });

        prev.addEventListener("click", function (event) {
            event.preventDefault();

            currentIndex = (currentIndex - 1 + total) % total;

            updateCarousel();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", function (event) {
                event.preventDefault();

                if (index < total) {
                    currentIndex = index;
                    updateCarousel();
                }
            });
        });

        updateCarousel();
    }

    initializeCarousel(
        "family-track",
        "family-prev",
        "family-next",
        "family-counter",
        "family-dots"
    );

    initializeCarousel(
        "friends-track",
        "friends-prev",
        "friends-next",
        "friend-counter",
        "friends-dots"
    );

});
