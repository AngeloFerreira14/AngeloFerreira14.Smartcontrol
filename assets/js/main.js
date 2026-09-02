
(function () {
    function askUser() {
        let nomeCompleto = prompt('Digite seu nome e sobrenome:');
        return nomeCompleto.trim();
    }

    let usuario = askUser();

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

    const headerUser = document.getElementById('userDisplay');
    if (headerUser) headerUser.textContent = saudacao;

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('open');
        });

    }
})();

// 

// const campoBusca = document.querySelector('campoBusca');
// const linhasTabela = document.querySelectorAll('tbody tr');

// if (campoBusca && linhasTabela) {
//     campoBusca.addEventListener('input', function () {
//         const termoBusca = campoBusca.value.trim().toLowerCase();

//         linhasTabela.forEach(function (linha) {
//             const conteudoLinha = linha.textContent.trim().toLowerCase();
            
//     }}