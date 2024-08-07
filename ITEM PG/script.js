function changeImage(src, element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = src;

    // Remove 'selected' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));

    // Add 'selected' class to the clicked thumbnail
    element.classList.add('selected');
}
