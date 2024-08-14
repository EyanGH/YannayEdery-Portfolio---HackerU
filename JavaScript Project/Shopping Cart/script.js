let cart = [];

function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.productName} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });

    cartTotal.innerText = `Total: $${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function clearCart() {
    cart = [];
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }


    alert("Proceeding to checkout with total: $" + cart.reduce((total, item) => total + item.price, 0));


    window.location.href = "checkout.html";
}
