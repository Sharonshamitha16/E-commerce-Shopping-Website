// cahnging image js code 

function changeImage(src, element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = src;

    // Remove 'selected' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));

    // Add 'selected' class to the clicked thumbnail
    element.classList.add('selected');
}

//  modal price update and price quantity update  and addto cart update
let modalprice = 0;


const quant = document.getElementById('Quantity');
const price = document.getElementById('price');


const cartitem = document.getElementById('cart-item')
const cartItemsContainer = document.getElementById('cart-items-container');




const products = {
    1: {
        name: 'Ethnic Wear',
        price: 500,
        imageSrc: '/ITEM PG/ASSETS/chuthidhar.jpg'
    },
    2: {
        name: 'Casual Shirt',
        price: 700,
        imageSrc: '/ITEM PG/ASSETS/JEAN.jpg'
    }}

 total_price = document.getElementById('total_price')

function price_change_quantity_click(productId) {


    const product = products[productId]
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
    let quantity = parseInt(document.getElementById('quantity').value);
    quantity++;
    document.getElementById('quantity').value = quantity;
    updateTotalPrice(quantity);
}

function decrementQuantity() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
        updateTotalPrice(quantity);
    }
}

function updateTotalPrice(quantity) {
    const unitPrice = 500.00;
    const totalPrice = quantity * unitPrice;
    document.getElementById('totalPrice').textContent = `Rs${totalPrice.toFixed(2)}`;
}


