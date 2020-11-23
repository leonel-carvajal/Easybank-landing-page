const toggle = document.getElementById('ham')
const navbar = document.getElementById('navbar')
toggle.addEventListener('click', () => {
  navbar.classList.toggle('show-nav')
  let iconclose = 'icon-close'
  let ham = 'icon-hamburger'
  if (navbar.classList.contains('show-nav')) {
    toggle.src = `/images/${iconclose}.svg`
  } else {
    toggle.src = `/images/${ham}.svg`
  }
})