
/*###################################################################
PARTE 1
Este cara só funciona para elementos inseridos no código html diretamente
//selecionando todo mundo que tem a classe tr
var pacientes = document.querySelectorAll('.paciente');
pacientes.forEach(function(paciente){
    //colocando o escutador de evento
    paciente.addEventListener("dblclick", function() {
        //o this é o dono do evento, ou seja, é o cara que foi clicado.
      this.remove();
      //só que este cara nao vai funcionar para elementos que tenham sidos inseridos depois que o código html foi lido, ou seja, novos elementos não ganham essa function.
    });
});
###################################################################*/

/*#####################################################################
PARTE 2 - USANDO DELEGATE - ELE IRÁ DELEGAR EVENTOS PARA TODOS
Quando usamos eventos, eles são escutados por todos os ascendentes do elemento, ou seja, todos os elementos que estão acima dele, colocou evento no <td> a <tr> escuta, o <tbody> escuta, container escuta e assim vai
#####################################################################*/
var tabela = document.querySelector('tbody');

    tabela.addEventListener("dblclick", function(event){
    //Estou usando o event(lembrando do event.preventDefault();) porque ele vai falar quem foi o cara que foi clicado, se deixar com o this ele vai achar que foi a tabela e vai remover a tabela - na realidade preciso remover a linha da td - lembre-se o evento pode ser chamado por qq filho e o pai vai escutar -  o this indica a quem pertence o evento, quem é o dono do evento  - vamos usar o target que vai informar quem vai sofrer o evento - lembrar que quando clico é na td mas eu devo remover a TR - falar das bolhas de refrigerante

//aplicando um efeito para sumir devagar - não esquecer de inserir a classe



    var alvoDoElemento = event.target; //pegando o elemento que doi clicado
    var paiDoElemento = alvoDoElemento.parentNode; // pegando o pai do elemento o cara que deve ser excluído - TR
    paiDoElemento.classList.add("sumindo");
    //se já chamar a remoção você não vai ver pois vai ficar muito rápido, então vou usar um temporizador
    setTimeout(function(){
        paiDoElemento.remove();
    }, 500);

    // se quiser tudo em uma linha
    //even.target.parentNode.remove();





    });
