function orderProduct(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });


    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

showNotification(name + " added to cart!");
}
function searchProducts() {

    let input =
        document.getElementById("searchInput").value.toLowerCase();

    let products =
        document.getElementsByClassName("product");

    for(let i = 0; i < products.length; i++){

        let text =
            products[i].innerText.toLowerCase();

        if(text.includes(input)){
            products[i].style.display = "block";
        }
        else{
            products[i].style.display = "none";
        }
    }
}
function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartCount = document.getElementById("cart-count");

    if(cartCount){
        cartCount.innerHTML = "Cart (" + cart.length + ")";
    }
}

updateCartCount();
javascript
function loadCheckout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let checkoutItems = document.getElementById("checkout-items");
    let total = document.getElementById("total");

    if (!checkoutItems || !total) {
        return;
    }

    checkoutItems.innerHTML = "";

    let grandTotal = 0;

    cart.forEach(function(item) {

        let itemTotal = item.total || (item.price * item.quantity);

        checkoutItems.innerHTML += `

            <div class="card">

                <h3>${item.name}</h3>

                <p><strong>Flavor:</strong> ${item.flavor}</p>

                <p><strong>Quantity:</strong> ${item.quantity}</p>

                <p><strong>Price:</strong> ${item.price} TL</p>

                <p><strong>Total:</strong> ${itemTotal} TL</p>

            </div>

            <br>

        `;

        grandTotal += itemTotal;

    });

    total.innerHTML = "<h2>Grand Total: " + grandTotal + " TL</h2>";
}

javascript
function confirmOrder() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    let message = "🍩 *New Order - Sweet House*%0A%0A";

    let grandTotal = 0;

    cart.forEach(function(item){

        let itemTotal = item.total || (item.price * item.quantity);

        grandTotal += itemTotal;

        message +=
        item.name + "%0A" +
        "Flavor: " + item.flavor + "%0A" +
        "Quantity: " + item.quantity + "%0A" +
        "Total: " + itemTotal + " TL%0A%0A";

    });

    message +=
    "------------------------%0A";

    message +=
    "Grand Total: " + grandTotal + " TL";

    window.open(
        "https://wa.me/905078312664?text=" + message,
        "_blank"
    );

    localStorage.removeItem("cart");

    updateCartCount();

}


loadCheckout();
function addCustomizedProduct() {

    let name = document.querySelector("h1").innerText;

    let price = parseInt(
        document.querySelector("h2").innerText.replace(/\D/g, "")
    );

    let flavor = document.getElementById("flavor").value;

    let quantity = parseInt(
        document.getElementById("quantity").value
    );

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        flavor: flavor,
        quantity: quantity,
        price: price,
        total: price * quantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

showNotification(name + " added to cart!");
}
function showNotification(message){

    let notification = document.getElementById("notification");

    if(!notification){

        notification = document.createElement("div");

        notification.id = "notification";

        document.body.appendChild(notification);

    }

    notification.innerHTML = "✅ " + message;

    notification.classList.add("show");

    setTimeout(function(){

        notification.classList.remove("show");

    },2000);

}
