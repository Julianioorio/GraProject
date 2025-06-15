document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.toString().replace("=", "");

  try {
    const response = await fetch(`http://localhost:4000/products?${productId}`);
    if (!response.ok) throw new Error("Ошибка при получении данных");

    const products = await response.json();
    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) throw new Error("Продукт не найден");

    const tonsElement = document.querySelectorAll(".product-tons");
    if (tonsElement && tonsElement.length > 0) {
      const tonsValue = product.tons || product.weight || product.tonnage || product.mass || "Н/Д";
      tonsElement[0].textContent = `${tonsValue} т`;
      tonsElement[1].textContent = `${tonsValue} т`;
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Не удалось загрузить информацию о тоннах";
    errorMessage.style.color = "red";
    document.body.appendChild(errorMessage);
  }
});
