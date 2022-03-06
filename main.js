/*=== TOGGLE MENU ===============*/
const nav    = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}


/*=== TOGGLE MENU-ITEM WHEN CLICKED ===============*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}





/*=== SWIPER (Slider/Carousel) ===============*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})





/*=== ScrollReveal (Show elements animation when scroll) ===============*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
})

scrollReveal.reveal(`
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,

  { interval: 150 }
)





/*=== CHANGING HEADER ACTIVE-ITEM WHEN SCROLL ===============*/
const header    = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) header.classList.add('scroll')
  
  else header.classList.remove('scroll')
}


/*=== BACK TO TOP BUTTON ===============*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  
  if (window.scrollY >= 560) backToTopButton.classList.add('show')
  
  else backToTopButton.classList.remove('show')
}


/*=== ACTIVE MENU-ITEM WHEN A SECTION IS VISIBLE ===============*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}





/*=== EXECUTE FUNCTIONS WHEN SCROLL ===============*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
