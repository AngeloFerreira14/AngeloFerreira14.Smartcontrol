const menuToggle =document.querySelector('.menu-toggle');

const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click',function () { menu.classList.toggle('open'); });
}

/* DARK MODE */
const btnTema = document.querySelector('#btnTema');
if (btnTema) {
    btnTema.addEventListener( 'click',function () {document.body.classList.toggle('dark-theme');

        }
    );
}