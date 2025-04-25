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

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981"
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px"
      },
    },
  },
};