function changeImage(src, element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = src;

    // Remove 'selected' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));

    // Add 'selected' class to the clicked thumbnail
    element.classList.add('selected');
}



    const quant = document.getElementById('Quantity');
    const price = document.getElementById('price');

    total_price = document.getElementById('total_price')
    function price_change_quantity_click() {
        let rate = price.textContent.replace('Rs.', '');
        let quantity =quant.value
        let total = rate * quantity
        console.log(total)
        total_price.textContent = `Rs.${total}`;

    }
    price_change_quantity_click();

