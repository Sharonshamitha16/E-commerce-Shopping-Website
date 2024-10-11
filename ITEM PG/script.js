// // cahnging image js code 

// function changeImage(src, element) {
//     const mainImage = document.getElementById('main-image');
//     mainImage.src = src;

//     // Remove 'selected' class from all thumbnails
//     const thumbnails = document.querySelectorAll('.thumbnail');
//     thumbnails.forEach(thumb => thumb.classList.remove('selected'));

//     // Add 'selected' class to the clicked thumbnail
//     element.classList.add('selected');
// }

//  modal price update and price quantity update  and addto cart update
let modalprice = 0;


const quant = document.getElementById('Quantity');
const price = document.getElementById('price');


const cartitem = document.getElementById('cart-item')
const cartItemsContainer = document.getElementById('cart-items-container');




// const products = {
//     1: {
//         name: 'Ethnic Wear',
//         price: 500,
//         imageSrc: '/ITEM PG/ASSETS/chuthidhar.jpg'
//     },
//     2: {
//         name: 'Casual Shirt',
//         price: 700,
//         imageSrc: '/ITEM PG/ASSETS/JEAN.jpg'
//     }}

 total_price = document.getElementById('total_price')

function price_change_quantity_click(productId) {


    //const product = products[productId]
    let rate = price.textContent.replace('Rs.', '');
    let quantity = quant.value
    let total = rate * quantity
    console.log(total)
    total_price.textContent = `Rs.${total}`;
    modalprice += total
    document.getElementById('total_price_modal').textContent = `Rs.${modalprice}`
    document.getElementById('total_price_cart').textContent = `Rs.${modalprice}`



    const cartitemhtml =`
    <img src ="${product.imageSrc}" alt="${products.name}" class="cart-item-img ">
    <div class="card card-body"> 
    <p> ${products.imageSrc}
    </p>
    <p> ${quantity} x Rs. ${total_price}
    </div>
    <button class="remove-item-btn"> x </button>
    <div>` ;
    cartItemsContainer.innerHTML += cartItemHTML;

}
price_change_quantity_click();



document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    modalprice = 0;  // Reset the accumulated price when the modal is closed
});


// cart pg
function incrementQuantity() {
    let quantityElement = document.getElementById('quantity_cart');
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
    updateTotalPrice();
}

function decrementQuantity() {
    let quantityElement = document.getElementById('quantity_cart');
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    let quantity = parseInt(document.getElementById('quantity_cart').innerText);
    let unitPrice = parseFloat(document.getElementById('unitPrice').innerText.replace('Rs', '').replace(',', ''));
    if (!isNaN(quantity) && !isNaN(unitPrice)) {
        let totalPrice = quantity * unitPrice;
        document.getElementById('totalPrice').innerText = 'Rs' + totalPrice.toLocaleString();
    } else {
        document.getElementById('totalPrice').innerText = 'Rs0.00';
    }
}

function removeItem() {
    // Clear the cart 
    document.getElementById('quantity_cart').innerText = '0';
    document.getElementById('totalPrice').innerText = 'Rs0.00';
    // Display a message
    alert('Cart is empty');
    document.querySelector('.col-2').style.display = 'none'; // Example class name for cart items container
    document.querySelector('.cart-summary').style.display = 'none'
    
}
