
document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       1. ACHIEVEMENTS PHOTO GALLERY
       ===================================== */

    const track = document.getElementById("track");

    if (track) {
        const allPhotos = [];

        const groups = [
            { prefix: "elementary", label: "ELEMENTARY" },
            { prefix: "junior", label: "JUNIOR HIGH" },
            { prefix: "senior", label: "SENIOR HIGH" }
        ];

        groups.forEach(group => {
            for (let n = 1; n <= 10; n++) {
                allPhotos.push({
                    src: `images/${group.prefix}${n}.jpg`,
                    caption: `${group.label} · PHOTO ${n}`
                });
            }
        });

        function cardFor(photo) {
            const card = document.createElement("div");
            card.className = "gallery-photo";

            const img = document.createElement("img");
            img.src = photo.src;
            img.alt = photo.caption;

            const fallback = document.createElement("div");
            fallback.className = "photo-fallback";
            fallback.innerHTML =
                `${photo.caption}<br><small>ADD PHOTO FILE</small>`;

            img.addEventListener("load", () => {
                fallback.style.display = "none";
            });

            img.addEventListener("error", () => {
                img.style.display = "none";
            });

            card.appendChild(img);
            card.appendChild(fallback);

            card.addEventListener("click", () => openLightbox(photo));

            return card;
        }

        allPhotos.forEach(photo => track.appendChild(cardFor(photo)));
        allPhotos.forEach(photo => track.appendChild(cardFor(photo)));

        let current = 0;

        const modal = document.getElementById("lightbox");
        const lbimg = document.getElementById("lightbox-img");
        const caption = document.getElementById("lightbox-caption");

        function openLightbox(photo) {
            if (!modal || !lbimg || !caption) return;

            current = allPhotos.findIndex(p => p.src === photo.src);
            showPhoto();
            modal.classList.add("open");
        }

        function showPhoto() {
            if (!lbimg || !caption) return;

            const photo = allPhotos[current];
            lbimg.src = photo.src;
            caption.textContent = photo.caption;
        }

        function nextPhoto(direction) {
            current = (current + direction + allPhotos.length) % allPhotos.length;
            showPhoto();
        }

        document.getElementById("close")?.addEventListener("click", () => {
            modal?.classList.remove("open");
        });

        document.getElementById("prev")?.addEventListener("click", () => {
            track.scrollBy({ top: -400, behavior: "smooth" });
        });

        document.getElementById("next")?.addEventListener("click", () => {
            track.scrollBy({ top: 400, behavior: "smooth" });
        });

        document.getElementById("lbprev")?.addEventListener("click", () => {
            nextPhoto(-1);
        });

        document.getElementById("lbnext")?.addEventListener("click", () => {
            nextPhoto(1);
        });

        modal?.addEventListener("click", event => {
            if (event.target === modal) {
                modal.classList.remove("open");
            }
        });

        document.addEventListener("keydown", event => {
            if (!modal?.classList.contains("open")) return;

            if (event.key === "Escape") modal.classList.remove("open");
            if (event.key === "ArrowRight") nextPhoto(1);
            if (event.key === "ArrowLeft") nextPhoto(-1);
        });
    }


    /* =====================================
       2. GOLD CLICK RIPPLE
       ===================================== */

    document.addEventListener("click", function (event) {
        const ripple = document.createElement("span");

        ripple.className = "gold-click-ripple";
        ripple.style.left = event.clientX + "px";
        ripple.style.top = event.clientY + "px";

        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), 800);
    });


    /* =====================================
       3. MOUSE-FOLLOWING GOLD GLOW
       ===================================== */

    document.addEventListener("mousemove", function (event) {
        document.documentElement.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );
    });


    /* =====================================
       4. PAGE ENTRANCE
       ===================================== */

    document.body.classList.add("page-loaded");


    /* =====================================
       5. ANIMATED GOLD PAGE TRANSITIONS
       ===================================== */

    const transition = document.createElement("div");

    transition.className = "page-transition";

    transition.innerHTML = `
        <div class="transition-text">BEA NAVATA</div>
        <div class="transition-subtitle">PERSONAL PORTFOLIO</div>
        <div class="transition-line"></div>
    `;

    document.body.appendChild(transition);

    let isTransitioning = false;

    document.addEventListener("click", function (event) {

        if (!(event.target instanceof Element)) return;

        const link = event.target.closest("a[href]");

        if (!link || isTransitioning) return;

        if (
            link.target === "_blank" ||
            link.hasAttribute("download") ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
        ) return;

        const url = new URL(link.href, window.location.href);

        if (url.origin !== window.location.origin) return;

        if (url.pathname === window.location.pathname) return;

        event.preventDefault();
        isTransitioning = true;

        const file = url.pathname.split("/").pop().toLowerCase();

        let title = "WELCOME";

        if (file === "personal.html") {
            title = "PERSONAL INFORMATION";
        } else if (file === "achievements.html") {
            title = "MY ACHIEVEMENTS";
        } else if (file === "family.html") {
            title = "MY FAMILY AND FRIENDS";
        } else if (file === "index.html" || file === "") {
            title = "HOME";
        }

        const transitionText =
            transition.querySelector(".transition-text");

        if (transitionText) {
            transitionText.textContent = title;
        }

        transition.classList.remove("active");

        void transition.offsetWidth;

        transition.classList.add("active");

        setTimeout(function () {
            window.location.assign(url.href);
        }, 1500);

    }, true);

});
