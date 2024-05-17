const boton = document.querySelector(".botonExplorar");
boton.addEventListener("click", function () {
  const target = document.querySelector(this.getAttribute("data-target"));
  console.log(target);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
});
