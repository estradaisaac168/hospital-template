var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// Seleccionamos tanto los títulos como las descripciones
const elementos = document.querySelectorAll('.title, .description');

// Creamos el observer usando IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');  // Añadimos la clase cuando el elemento entra en la vista
    }
  });
});

// Observamos cada título y descripción
elementos.forEach(el => {
  observer.observe(el);
});


// Obtener el botón
const btnUp = document.getElementById("btn-up");

// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Mostrar el botón cuando el usuario ha bajado 200px
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, desplázalo hacia arriba
btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Desplazamiento suave
  });
});
