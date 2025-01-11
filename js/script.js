// Seleciona os elementos necessários
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para mostrar o slide ativo
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Remove a classe 'active' de todos os slides
    if (i === index) {
      slide.classList.add('active'); // Adiciona 'active' apenas ao slide atual
    }
  });
}

// Evento para o botão "Próximo"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Vai para o próximo slide
  showSlide(currentIndex);
});

// Evento para o botão "Anterior"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Vai para o slide anterior
  showSlide(currentIndex);
});

// Inicializa o carrossel
showSlide(currentIndex);

// Alternância automática dos slides a cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000); // Alterna a cada 5 segundos
