'use strict'

let divMenu = document.querySelector('.header-link')
let divBtn =  document.querySelector('.btn-burger')

if (divBtn != null ) {
    function burgerShow () {
        if (divBtn.classList.contains('active')) {
            divMenu.classList.remove('active')
            divBtn.classList.remove('active')
        } else {
            divMenu.classList.add('active')
            divBtn.classList.add('active')
        }
    }

    divBtn.addEventListener("click", burgerShow)

    console.log(divBtn.classList)
}