window.addEventListener('load', function () {

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

  // Seleccionamos tanto los títulos como las descripciones
  const elementos = document.querySelectorAll('.title-animation, .description-animation');

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
  const btnUp = document.getElementById(".btn-up");

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

});






