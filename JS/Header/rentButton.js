document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const rentButton = event.target.closest("button[data-product-id]");

    if (rentButton) {
      const productId = rentButton.dataset.productId;

      window.location.href = `ProductCard.html?${productId}`;
    }
  });
});
