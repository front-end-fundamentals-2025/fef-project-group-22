document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector(".main-image img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));

      this.classList.add("active");

      mainImage.src = this.src;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const storageOptions = document.querySelectorAll(".size-option");
  storageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      storageOptions.forEach((opt) => opt.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.querySelector(".timer");
  const endTime = new Date().getTime() + 5 * 60 * 1000;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = endTime - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `00 : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds}`;

    if (distance < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "00 : 00 : 00";
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.querySelector(".add-to-cart");

  addToCartButton.addEventListener("click", function () {
    const productName = document.querySelector(".product-name").innerText;
    const currentPrice = document.querySelector(".current-price").innerText;
    const sizeOption = document.querySelector(".size-option.active").innerText;
    const colorOption = document.querySelector(".color-option.active")
      .classList[1];

    const cartItem = {
      name: productName,
      price: currentPrice,
      size: sizeOption,
      color: colorOption,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
  });
});
