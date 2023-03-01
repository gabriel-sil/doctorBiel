const manu = document.querySelector('header');

function activeScroll(){
  manu.classList.toggle('ativo', scrollY > 0);
}
window.addEventListener('scroll', activeScroll);
//////////////////////////////////////////////////

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//////////////////////////////////////////////////////////////////

// seleciona todos os links dentro do menu
const linksMenu = document.querySelectorAll('.link-menu');

// adiciona um listener de evento de clique a cada link
linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    // seleciona o botão de fechar o menu
    const fecharMenu = document.querySelector('.fechar-menu');
    // dispara o evento de clique do botão de fechar o menu
    fecharMenu.click();
  });
});

//////////////////////////////////////////////////////////////////

const li = document.querySelectorAll(".link-menu");
const sec = document.querySelectorAll(".border-scrool");

function activeMenu(){
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
  }
activeMenu();
window.addEventListener("scroll", activeMenu);
