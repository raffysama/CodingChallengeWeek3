document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
        const content = item.querySelector(".accordion-content");

        item.addEventListener("click", function () {
            if (content.style.display === "block" || content.style.display === "") {
                content.style.display = "none";
                this.classList.remove("active");
            } else {
                content.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});