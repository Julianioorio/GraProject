document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".clickInfo button");
  const blocks = {
    description: document.querySelector(".description"),
    characteristics: document.querySelector(".characteristics"),
    documentation: document.querySelector(".Documentation"),
  };

  const showBlock = (index) => {
    buttons.forEach((btn) => btn.classList.remove("activeBtn"));
    buttons[index].classList.add("activeBtn");

    Object.values(blocks).forEach((block) => {
      if (block) block.style.display = "none";
    });

    const blockToShow = Object.values(blocks)[index];
    if (blockToShow) {
      if (index === 2) {
        blockToShow.style.cssText = "display: flex; flex-wrap: wrap; justify-content: space-between; padding: 30px 0 30px 0;";
      } else {
        blockToShow.style.display = "block";
      }
    }
  };

  showBlock(0);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => showBlock(index));
  });
});
