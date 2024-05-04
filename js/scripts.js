const menuIcons = document.querySelectorAll('.prim-nav__mob-icon')
const menu = document.querySelector('.prim-nav__overlay')


menuIcons.forEach(icon => {
    icon.addEventListener('click', () => {
       menuIcons.forEach(ico => {
         if (ico.classList.contains('open')) {
            ico.classList.toggle('open')
        }else {
            ico.classList.add('open')
        }
       })
       menu.classList.toggle('prim-nav__menu-toggle')
    })
})
