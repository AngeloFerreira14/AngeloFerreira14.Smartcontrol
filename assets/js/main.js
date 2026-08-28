
(function () {
    const STORAGE_KEY = 'smartcontrol_user';

    function askUser() {
        let nome = prompt('Digite seu nome:');
        let sobrenome = prompt('Digite seu sobrenome:');

        if (!nome || nome.trim() === '') nome = 'Usuário';
        if (!sobrenome || sobrenome.trim() === '') sobrenome = '';

        return `${nome} ${sobrenome}`.trim();
    }

    let usuario = null;
    try {
        usuario = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        usuario = null;
    }

    if (!usuario) {
        usuario = askUser();
        try {
            localStorage.setItem(STORAGE_KEY, usuario);
        } catch (e) {}
    }

    const agora = new Date();
    const dias = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    const diaSemana = dias[agora.getDay()];
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');

    const fusoMinutos = -agora.getTimezoneOffset();
    const sinal = fusoMinutos >= 0 ? '+' : '-';
    const fusoHoras = String(Math.floor(Math.abs(fusoMinutos) / 60)).padStart(2, '0');
    const fuso = `${sinal}${fusoHoras}:00`;

    const saudacao = `Olá, ${usuario}!`;
    const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (${fuso})`;

    console.log(`${saudacao} Hoje é ${dataFormatada}`);

    const nomeElem = document.getElementById('nomeCompleto');
    const dataElem = document.getElementById('dataAtual');

    if (nomeElem) nomeElem.textContent = saudacao;
    if (dataElem) dataElem.textContent = dataFormatada;

        // Também exibe o nome no header (útil em mobile)
        const headerUser = document.getElementById('userDisplay');
        if (headerUser) headerUser.textContent = saudacao;

        // Toggle do menu em mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        if (menuToggle && menu) {
            menuToggle.addEventListener('click', function () {
                menu.classList.toggle('open');
            });
            // fecha menu ao clicar em um link
            menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
        }

    // Helper para desenvolvimento: limpar usuário armazenado
    window.smartcontrol = window.smartcontrol || {};
    window.smartcontrol.clearUser = function () {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
        location.reload();
    };
})();
