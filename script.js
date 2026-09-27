/* =========================================================
   SWEET HOUSE
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   ORDER PRODUCT
   ========================================================= */

function orderProduct(name, price) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    showNotification(
        name + " added to cart!"
    );
}


/* =========================================================
   SEARCH PRODUCTS
   ========================================================= */

function searchProducts() {

    let searchInput =
        document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    let input =
        searchInput.value.toLowerCase();

    let products =
        document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {

        let text =
            products[i].innerText.toLowerCase();

        if (text.includes(input)) {

            products[i].style.display = "block";

        } else {

            products[i].style.display = "none";

        }
    }
}


/* =========================================================
   UPDATE CART COUNT
   ========================================================= */

function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let cartCount =
        document.getElementById("cart-count");

    if (cartCount) {

        cartCount.innerHTML =
            "Cart (" + cart.length + ")";

    }
}


/* =========================================================
   LOAD CHECKOUT
   ========================================================= */

function loadCheckout() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let checkoutItems =
        document.getElementById("checkout-items");

    let total =
        document.getElementById("total");

    if (!checkoutItems || !total) {
        return;
    }

    checkoutItems.innerHTML = "";

    let grandTotal = 0;

    cart.forEach(function(item) {

        let price =
            Number(item.price) || 0;

        let quantity =
            Number(item.quantity) || 1;

        let itemTotal =
            Number(item.total) ||
            (price * quantity);

        checkoutItems.innerHTML += `

            <div class="card">

                <h3>${item.name}</h3>

                <p>
                    <strong>Flavor:</strong>
                    ${item.flavor || "Default"}
                </p>

                <p>
                    <strong>Quantity:</strong>
                    ${quantity}
                </p>

                <p>
                    <strong>Price:</strong>
                    ${price} TL
                </p>

                <p>
                    <strong>Total:</strong>
                    ${itemTotal} TL
                </p>

            </div>

            <br>

        `;

        grandTotal += itemTotal;

    });

    total.innerHTML =
        "<h2>Grand Total: " +
        grandTotal +
        " TL</h2>";
}


/* =========================================================
   CONFIRM ORDER
   ========================================================= */

function confirmOrder() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    let message =
        "🍩 *New Order - Sweet House*%0A%0A";

    let grandTotal = 0;

    cart.forEach(function(item) {

        let price =
            Number(item.price) || 0;

        let quantity =
            Number(item.quantity) || 1;

        let itemTotal =
            Number(item.total) ||
            (price * quantity);

        grandTotal += itemTotal;

        message +=
            item.name +
            "%0A" +

            "Flavor: " +
            (item.flavor || "Default") +
            "%0A" +

            "Quantity: " +
            quantity +
            "%0A" +

            "Total: " +
            itemTotal +
            " TL%0A%0A";

    });

    message +=
        "------------------------%0A";

    message +=
        "Grand Total: " +
        grandTotal +
        " TL";

    window.open(
        "https://wa.me/905078312664?text=" +
        message,
        "_blank"
    );

    localStorage.removeItem("cart");

    updateCartCount();
}


/* =========================================================
   ADD CUSTOMIZED PRODUCT
   ========================================================= */

function addCustomizedProduct() {

    let title =
        document.querySelector("h1");

    let priceElement =
        document.querySelector("h2");

    let flavorElement =
        document.getElementById("flavor");

    let quantityElement =
        document.getElementById("quantity");

    if (
        !title ||
        !priceElement ||
        !flavorElement ||
        !quantityElement
    ) {

        return;
    }

    let name =
        title.innerText;

    let price =
        parseInt(
            priceElement.innerText.replace(/\D/g, "")
        );

    let flavor =
        flavorElement.value;

    let quantity =
        parseInt(quantityElement.value);

    if (!quantity || quantity < 1) {

        quantity = 1;
    }

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({

        name: name,

        flavor: flavor,

        quantity: quantity,

        price: price,

        total: price * quantity

    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    showNotification(
        name + " added to cart!"
    );
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    let notification =
        document.getElementById("notification");

    if (!notification) {

        notification =
            document.createElement("div");

        notification.id =
            "notification";

        document.body.appendChild(
            notification
        );
    }

    notification.innerHTML =
        "✅ " + message;

    notification.classList.add("show");

    setTimeout(function() {

        notification.classList.remove("show");

    }, 2000);
}


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

const translations = {

    /* ================= ENGLISH ================= */

    en: {

        chooseLanguage:
            "Choose Your Language",

        home:
            "Home",

        products:
            "Products",

        contact:
            "Contact",

        about:
            "About",

        freshProducts:
            "Fresh Donuts & Cinnamon Rolls",

        madeWithLove:
            "Made daily with love ❤️",

        bestSellers:
            "Our Best Sellers",

        orderNow:
            "Order Now",

        phone:
            "Phone",

        location:
            "📍 Istanbul, Turkey",

        instagram:
            "Instagram",

        whatsapp:
            "WhatsApp Group",

        footerText:
            "Fresh Donuts & Cinnamon Rolls Made with Love ❤️",

        rights:
            "All Rights Reserved."

    },


    /* ================= ARABIC ================= */

    ar: {

        chooseLanguage:
            "اختر لغتك",

        home:
            "الرئيسية",

        products:
            "المنتجات",

        contact:
            "تواصل معنا",

        about:
            "من نحن",

        freshProducts:
            "دونات طازجة ولفائف القرفة",

        madeWithLove:
            "نُحضّرها يوميًا بكل حب ❤️",

        bestSellers:
            "الأكثر مبيعًا",

        orderNow:
            "اطلب الآن",

        phone:
            "الهاتف",

        location:
            "📍 إسطنبول، تركيا",

        instagram:
            "إنستغرام",

        whatsapp:
            "مجموعة واتساب",

        footerText:
            "دونات طازجة ولفائف القرفة مصنوعة بكل حب ❤️",

        rights:
            "جميع الحقوق محفوظة."

    },


    /* ================= TURKISH ================= */

    tr: {

        chooseLanguage:
            "Dil Seçin",

        home:
            "Ana Sayfa",

        products:
            "Ürünler",

        contact:
            "İletişim",

        about:
            "Hakkımızda",

        freshProducts:
            "Taze Donutlar ve Tarçınlı Rulolar",

        madeWithLove:
            "Her gün sevgiyle hazırlanır ❤️",

        bestSellers:
            "En Çok Satanlar",

        orderNow:
            "Sipariş Ver",

        phone:
            "Telefon",

        location:
            "📍 İstanbul, Türkiye",

        instagram:
            "Instagram",

        whatsapp:
            "WhatsApp Grubu",

        footerText:
            "Taze Donutlar ve Tarçınlı Rulolar Sevgiyle Hazırlanır ❤️",

        rights:
            "Tüm Hakları Saklıdır."

    }

};


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyLanguage(language) {

    let selectedLanguage =
        translations[language];

    if (!selectedLanguage) {

        language = "en";

        selectedLanguage =
            translations.en;
    }


    /* Translate all elements */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            let key =
                element.getAttribute("data-i18n");

            if (
                selectedLanguage[key] !== undefined
            ) {

                element.textContent =
                    selectedLanguage[key];

            }

        });


    /* Arabic RTL */

    if (language === "ar") {

        document.documentElement.lang =
            "ar";

        document.documentElement.dir =
            "rtl";

    } else {

        document.documentElement.lang =
            language;

        document.documentElement.dir =
            "ltr";

    }


    /* Save selected language */

    localStorage.setItem(
        "language",
        language
    );


    /* Hide language screen */

    let languageScreen =
        document.getElementById(
            "language-screen"
        );

    if (languageScreen) {

        languageScreen.style.display =
            "none";
    }
}


/* =========================================================
   SELECT LANGUAGE
   ========================================================= */

function selectLanguage(language) {

    applyLanguage(language);

}


/* =========================================================
   LOAD SAVED LANGUAGE
   ========================================================= */

function loadSavedLanguage() {

    let savedLanguage =
        localStorage.getItem("language");

    let languageScreen =
        document.getElementById(
            "language-screen"
        );


    if (savedLanguage) {

        applyLanguage(
            savedLanguage
        );

    } else {

        if (languageScreen) {

            languageScreen.style.display =
                "flex";
        }
    }
}


/* =========================================================
   MAKE FUNCTIONS AVAILABLE TO HTML
   ========================================================= */

window.orderProduct =
    orderProduct;

window.searchProducts =
    searchProducts;

window.updateCartCount =
    updateCartCount;

window.loadCheckout =
    loadCheckout;

window.confirmOrder =
    confirmOrder;

window.addCustomizedProduct =
    addCustomizedProduct;

window.showNotification =
    showNotification;

window.selectLanguage =
    selectLanguage;


/* =========================================================
   START SCRIPT
   ========================================================= */

updateCartCount();

loadCheckout();

loadSavedLanguage();
