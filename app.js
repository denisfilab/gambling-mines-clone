document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Add collapsed class to grid item
            item.classList.add("expand-one");

            setTimeout(() => {
                item.classList.remove("expand-one");
                item.classList.add("collapsed");
            }, 300);

            setTimeout(() => {
                item.style.visibility = "hidden";
            }, 800);

            // Set the background color to #333559

            // Find the image inside the clicked grid item and add expanded class
        });
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const gridItems = document.querySelectorAll(".grid-item");

//     gridItems.forEach((item) => {
//         item.addEventListener("click", () => {
//             // Add collapsed class to grid item
//             item.classList.add("collapsed");

//             // Find the image inside the clicked grid item and add expand class
//             const img = item.querySelector("img");
//             img.classList.add("expand");
//         });
//     });
// });
