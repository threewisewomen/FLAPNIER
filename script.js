let currentIndex = 0;

function swipeLeft() {
    const mediaContent = document.querySelector('.media-content');
    const totalItems = mediaContent.children.length;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    mediaContent.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
}

function swipeRight() {
    const mediaContent = document.querySelector('.media-content');
    const totalItems = mediaContent.children.length;
    currentIndex = (currentIndex + 1) % totalItems;
    mediaContent.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
}

// Auto swipe functionality
setInterval(swipeRight, 3000);
