document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("shopped-items");
    itemDiv.innerHTML = `
        <h5>${item.name}</h5>
        <p>Price: ${item.price}</p>
        <p>Size: ${item.size}</p>
        <p>Color: ${item.color}</p>
        <input type="number" value="1" />
        <button class="btn"><i class="fa fa-trash"></i></button>
      `;
    cartItemsContainer.appendChild(itemDiv);
  });
});
