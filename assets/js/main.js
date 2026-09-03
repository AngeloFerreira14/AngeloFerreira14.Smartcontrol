
(function () {

    function askUser() {
        let nomeCompleto = prompt( 'Digite seu nome e sobrenome:');

        if (!nomeCompleto) {return 'Usuário'; }
        return nomeCompleto.trim();
    }

    const usuario = askUser();
    const agora = new Date()
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

    /* FUSO HORÁRIO */
    const fusoMinutos = -agora.getTimezoneOffset();
    const sinal =fusoMinutos >= 0 ? '+' : '-';
    const fusoHoras = String( Math.floor(Math.abs(fusoMinutos) / 60)).padStart(2, '0');
    const fuso =`${sinal}${fusoHoras}:00`;

    /* TEXTOS */
    const saudacao = `Olá, ${usuario}!`;
    const dataFormatada =`${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (${fuso})`;
    console.log(`${saudacao} Hoje é ${dataFormatada}`);

    /* MOSTRAR INFORMAÇÕES NO HTML */
    const nomeElem =document.getElementById('nomeCompleto');
    const dataElem = document.getElementById('dataAtual');
    if (nomeElem) { nomeElem.textContent = saudacao;}
    if (dataElem) { dataElem.textContent = dataFormatada;}

    /* MENU MOBILE */
    const menuToggle =document.querySelector('.menu-toggle');

    const menu =document.querySelector('.menu');

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

})();


/* BUSCA NA TABELA */

const campoBusca =
    document.querySelector('#campoBusca');

const linhasTabela =
    document.querySelectorAll('tbody tr');


if (campoBusca) {

    campoBusca.addEventListener('input',
        function () {
            const termoBusca =campoBusca.value.trim().toLowerCase();
            linhasTabela.forEach(
                function (linha) {
                    const conteudoLinha =linha.textContent.trim().toLowerCase();
                    if ( conteudoLinha.includes( termoBusca )) {
                        linha.style.display = '';
                    } else {
                        linha.style.display = 'none';
                    }
                }
            );
        }
    );
}

