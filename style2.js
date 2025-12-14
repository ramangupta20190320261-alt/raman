/*.products::-webkit-scrollbar{
    display: none;
}

.categories::-webkit-scrollbar{
    display: none;
}

.populars::-webkit-scrollbar{
    display: none;
}

.shader{
    background: linear-gradient(to right bottom, #69628a, #040309);
}*/
// JS to toggle the cart dropdown
const cartIcon = document.querySelector(".carticon");
const cartExpand = document.querySelector(".cartexpnd");

cartIcon.addEventListener("click", () => {
  cartExpand.classList.toggle("hidden");
});
