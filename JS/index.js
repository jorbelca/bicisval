const selectOptions = document.querySelectorAll(".select-options li");
let activeIndex = 0;
const like = document.querySelectorAll(".like");

// Añadimos el evento click a la bandera activa
document.querySelector(".custom-select").addEventListener("click", toggleFlag);

function toggleFlag() {
  // Ocultamos la bandera actual
  selectOptions[activeIndex].classList.remove("active");

  // Cambiamos el índice de la bandera
  activeIndex = (activeIndex + 1) % selectOptions.length;

  // Mostramos la nueva bandera
  selectOptions[activeIndex].classList.add("active");
}

Array.from(like).map((l) => l.addEventListener("click", toggleLike));

function toggleLike(event) {
  const likeElement = event.currentTarget;

  likeElement.classList.toggle("liked");
}
