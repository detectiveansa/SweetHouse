function orderProduct(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
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