// scripts.js

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.backgroundColor = '#FFFFFF';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('_active');
            });
            this.classList.add('_active');
        });
    });

    const wrapper = document.getElementById('swiper-wrapper-f39c661692f2c61f');
    const slides = document.querySelectorAll('.swiper-slide');
    let isDragging = false;
    let startPosition = 0;
    let currentIndex = 0;
    let minIndex = 0;
    let maxIndex = slides.length - 6.2;

    function updateTransform() {
        const translateValue = -currentIndex * (300 + 29) + 'px';
        wrapper.style.transform = 'translateX(' + translateValue + ')';
    }

    function handleTouchStart(e) {
        isDragging = true;
        startPosition = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;

        const currentPosition = e.touches[0].clientX;
        const diff = currentPosition - startPosition;

        if ((currentIndex === minIndex && diff > 0) || (currentIndex === maxIndex && diff < 0)) {
            wrapper.style.transform = 'translateX(' + (-currentIndex * (300 + 29)) + 'px)';
        } else {
            const newPosition = -currentIndex * (300 + 29) + diff;

            if (newPosition > -maxIndex * (300 + 29) && newPosition < 0) {
                wrapper.style.transform = 'translateX(' + newPosition + 'px)';
            }
        }
    }

    function handleTouchEnd(e) {
        if (!isDragging) return;

        isDragging = false;

        const movedBy = e.changedTouches[0].clientX - startPosition;

        if (movedBy < -150 && currentIndex < maxIndex) {
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        } else if (movedBy > 150 && currentIndex > minIndex) {
            currentIndex = Math.max(currentIndex - 1, minIndex);
        }

        updateTransform();
    }

    wrapper.addEventListener('touchstart', handleTouchStart);
    wrapper.addEventListener('touchmove', handleTouchMove);
    wrapper.addEventListener('touchend', handleTouchEnd);
});

document.querySelector(".language").addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("active");

    if (this.textContent === "Ru") {
        this.textContent = "en";
    } else {
        this.textContent = "Ru";
    }
});

function showAdditionalTex() {
    document.getElementById("leaveFromApart").type = 'date';
    document.getElementById("additionalTex").style.display = 'block';
}

function hideAdditionalTex() {
    if (!document.getElementById("leaveFromApart").value) {
        document.getElementById("leaveFromApart").type = 'text';
        document.getElementById("additionalTex").style.display = 'none';
    }
}

function showAdditionalText() {
    document.getElementById("comeTopApart").type = 'date';
    document.getElementById("additionalText").style.display = 'block';
}

function hideAdditionalText() {
    if (!document.getElementById("comeTopApart").value) {
        document.getElementById("comeTopApart").type = 'text';
        document.getElementById("additionalText").style.display = 'none';
    }
}

const apartCards = document.querySelectorAll('.apart-card');

apartCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.classList.add('__active');
    });

    card.addEventListener('mouseout', function() {
        this.classList.remove('__active');
    });
});

function hideHidden(element) {
    var hiddenElement = element.querySelector('.apart-card__hidden');
    if (hiddenElement) {
        hiddenElement.style.display = 'block';
    }
}

function showHidden(element) {
    var hiddenElement = element.querySelector('.apart-card__hidden');
    if (hiddenElement) {
        hiddenElement.style.display = 'none';
    }
}
