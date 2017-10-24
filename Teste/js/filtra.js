var campoFiltro = document.querySelector('#filtro-tabela');
campoFiltro.addEventListener('input', function () {
    var vacinas = document.querySelectorAll('.vacina');
        if (this.value.length > 0 ) {

                  for (var i = 0; i < vacinas.length; i++) {

                    var vacina = vacinas[i];

                    var tdNome = vacina.querySelector('.info-nome');

                    var nome = tdNome.textContent;
                    if (nome  != this.value) {
                      vacina.classList.add('esconder');
                    }
                    else {
                        vacina.classList.remove('esconder');
                    }
                  }
             }
             else {
                    for (var i = 0; i < vacinas.length; i++) {
                        var vacina = vacinas[i];
                        vacina.classList.remove('esconder');
                    }
             }


})
