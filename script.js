/* Efeito do carrosel */

let carrossel = document.querySelector('.carrossel');
let scrollAmount = 0;

function moveCarrossel(direction) {
  let scrollStep = 300 + 30; // Largura do item + gap
  carrossel.scrollBy({
    left: scrollStep * direction,
    behavior: 'smooth'
  });
} 

/* Pagina de serviços fade-in */
document.addEventListener('scroll', function() {
  const servicoItems = document.querySelectorAll('.servico-item');
  
  servicoItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.4;

      // Verifica se o item está visível na tela
      if (itemPosition < screenPosition) {
          item.classList.add('visible');  // Adiciona a classe para o fade-in
      } else {
          item.classList.remove('visible');  // Remove a classe se o item não estiver mais visível
      }
  });
});

/* Função do sobre mim para entrar na tela quando scrooll */

function handleScroll() {

  const elements = document.querySelectorAll('.sobremim h1, .sobremim .sobre p'); // Seleciona os elementos
  const windowHeight = window.innerHeight; // Altura visível da janela

  elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top; // Posição do elemento em relação à janela
      const elementBottom = element.getBoundingClientRect().bottom; // Posição inferior do elemento

      if (elementTop < windowHeight && elementBottom > 0) {
          // Se o elemento está visível na tela
          element.classList.add('visible');
      } else {
          // Remove a classe se o elemento sair da tela
          element.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', handleScroll); // Executa a função handleScroll sempre que houver scroll

  // Escuta o evento de scroll
  window.addEventListener('scroll', () => {
      const sectionTop = document.querySelector('.destaques').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Verifica se a seção está visível na tela e se a animação não foi executada ainda
      if (sectionTop < windowHeight && sectionTop > 0 && !hasAnimated) {
          counters.forEach(counter => {
              animateCounter(counter);
          });
          hasAnimated = true; // Marca que a animação foi executada
      }
  });

/* Menu Hamburger */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

/* Confirmar o envio do formulario */
document.getElementById("contactForm")?.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Clique no ok para continuar!');
})





