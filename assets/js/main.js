
(function () {

    function getStorageItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function setStorageItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn('Não foi possível salvar no localStorage:', error);
        }
    }

    function askUser() {
        const nomeSalvo = getStorageItem('smartcontrol_nome');
        if (nomeSalvo && nomeSalvo.trim()) {
            return nomeSalvo.trim();
        }

        let nomeCompleto = prompt('Digite seu nome e sobrenome:');

        if (!nomeCompleto || !nomeCompleto.trim()) {
            return 'Usuário';
        }

        const nomeFormatado = nomeCompleto.trim();
        setStorageItem('smartcontrol_nome', nomeFormatado);
        return nomeFormatado;
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

})();


/* BUSCA NA TABELA */

// const campoBusca =
//     document.querySelector('#campoBusca');

// const linhasTabela =
//     document.querySelectorAll('tbody tr');


// if (campoBusca) {

//     campoBusca.addEventListener('input',
//         function () {
//             const termoBusca =campoBusca.value.trim().toLowerCase();
//             linhasTabela.forEach(
//                 function (linha) {
//                     const conteudoLinha =linha.textContent.trim().toLowerCase();
//                     if ( conteudoLinha.includes( termoBusca )) {
//                         linha.style.display = '';
//                     } else {
//                         linha.style.display = 'none';
//                     }
//                 }
//             );
//         }
//     );
// }

