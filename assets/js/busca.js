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
