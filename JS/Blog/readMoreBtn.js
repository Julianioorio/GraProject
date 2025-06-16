document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.querySelector(".Blog");
  blogContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON" && !event.target.classList.contains("Download")) {
      const articleTitle = event.target.closest("div").querySelector("h3").textContent;

      window.location.href = `BlogPages.html?title=${encodeURIComponent(articleTitle)}`;
    }
  });
});
