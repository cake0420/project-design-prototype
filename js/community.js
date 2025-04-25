document.addEventListener("DOMContentLoaded", function () {
  // 정렬 드롭다운
  const sortButton = document.getElementById("sortButton");
  const sortDropdown = document.getElementById("sortDropdown");

  if (sortButton && sortDropdown) {
    sortButton.addEventListener("click", function () {
      sortDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
      if (
        !sortButton.contains(event.target) &&
        !sortDropdown.contains(event.target)
      ) {
        sortDropdown.classList.add("hidden");
      }
    });

    const sortOptions = sortDropdown.querySelectorAll("button");
    sortOptions.forEach((option) => {
      option.addEventListener("click", function () {
        sortButton.querySelector("span").textContent = this.textContent;
        sortDropdown.classList.add("hidden");
      });
    });
  }
});
