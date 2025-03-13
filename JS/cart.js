
document.addEventListener("DOMContentLoaded", function () {
    const shoppingElement = document.getElementById("shopping");
    const costElement = document.getElementById("cost");
    const deleteElement = document.getElementById("delete");
    const savedProduct = localStorage.getItem("cartItem"); // Retrieve saved product
    const savedPrice = localStorage.getItem("priceItem");// Retrieve saved product
    const nameElement = document.getElementById("full-name");
    const cardElement = document.getElementById("card-number");
    const monthElement = document.getElementById("month-year");
    const cvvElement = document.getElementById("cvv-number");
    const submitElement = document.getElementById("checkout");
    const messageElement = document.getElementById("message");
    const displayElement = document.getElementById("display-div");
  
    // Display saved product in the cart
    if (shoppingElement && savedProduct && savedPrice) {
      shoppingElement.textContent = savedProduct;
      costElement.textContent = savedPrice;
      shoppingElement.style.color = "#0000ff"; // Change text color
      shoppingElement.style.fontSize = "20px"; // Increase text size
      shoppingElement.style.fontWeight = "bold"; // Make text bold
      costElement.style.color = "#ff00ff"; // Change text color
      costElement.style.fontSize = "20px"; // Increase text size
      costElement.style.fontWeight = "bold"; // Make text bold
        
    } else {
      console.warn("Shopping cart item not found or cart is empty.");
    }
  
    // Delete button event listener
    if (deleteElement) {
      deleteElement.addEventListener("click", function () {
        localStorage.removeItem("cartItem"); // Remove from localStorage
        localStorage.removeItem("priceItem");
        shoppingElement.textContent = "Item has been removed"; // Reset cart display
        costElement.textContent="";
  
      });
    }
  
    // Checkout button event listener
    submitElement.addEventListener("click", function (event) {
      event.preventDefault();
  
      const savedProduct = localStorage.getItem("cartItem");
  
      // Get user input values
      let nam = nameElement.value;
      let card = cardElement.value;
      let monnum = monthElement.value;
      let cvvnum = cvvElement.value;
  
      // Step 1: Check if a product is in the cart
      if (!savedProduct || !savedPrice || shoppingElement.textContent !== savedProduct || costElement.textContent !== savedPrice) {
        messageElement.innerHTML = "Go to product page and add items to cart";
        displayElement.style.backgroundColor = "#F43D0D";
        return; // Stop execution
      }
  
      // Step 2: First prompt to enter card details
      if (!nam && !card && !monnum && !cvvnum) {
        messageElement.innerHTML = "Please enter your card details";
        displayElement.style.backgroundColor = "#F43D0D";
        return; // Stop execution here, allow user to fill details
      }
  
      // Step 3: Validate fields if any are empty
      if (nam === "") {
        messageElement.innerHTML = "Please enter your full name!";
        displayElement.style.backgroundColor = "#F43D0D";
        return;
      }
  
      if (card === "") {
        messageElement.innerHTML = "Please enter your card number!";
        displayElement.style.backgroundColor = "#F43D0D";
        return;
      }
  
      if (monnum === "") {
        messageElement.innerHTML = "Please enter the expiry date of the card!";
        displayElement.style.backgroundColor = "#F43D0D";
        return;
      }
  
      if (cvvnum === "") {
        messageElement.innerHTML = "Please enter the CVV of the card!";
        displayElement.style.backgroundColor = "#F43D0D";
        return;
      }
  
      // Step 4: If all checks pass, process order
      messageElement.innerHTML = "Item has been placed successfully!";
      displayElement.style.backgroundColor = "#009900";
    });
  });
  