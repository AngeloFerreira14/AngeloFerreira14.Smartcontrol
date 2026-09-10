const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
}

/* DARK MODE */
const btnTema = document.querySelector('#btnTema');

function aplicarTema(theme) {
    const dark = theme === 'dark';
    document.body.classList.toggle('dark-theme', dark);
}

const temaSalvo = localStorage.getItem('smartcontrol_tema');
if (temaSalvo) {
    aplicarTema(temaSalvo);
}

if (btnTema) {
    btnTema.addEventListener('click', function () {
        const estaEscuro = document.body.classList.toggle('dark-theme');
        localStorage.setItem('smartcontrol_tema', estaEscuro ? 'dark' : 'light');
    });
}