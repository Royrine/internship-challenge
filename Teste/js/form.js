				var botaoAdicionar = document.querySelector("#adicionar-vacina");
				botaoAdicionar.addEventListener("click",function(event){
				event.preventDefault();

						//PEGANDO DADOS DO PACIENTE
						var form = document.querySelector("#form-adiciona");

						var vacina = obtemInformacoesDoForm(form);

						var vacinaTR = montaTR(vacina);

						var erros = validaVacina(vacina);
						if( erros.length > 0){
							exibeMensagensdeErro(erros);
							return;
						}

						var tabela = document.querySelector("#tabela-vacinas");
						tabela.appendChild(vacinaTR);

						form.reset();

						var mensagensErro = document.querySelector('#mensagens-erro');
						mensagensErro.innerHTML = "";

						});


						function obtemInformacoesDoForm(form){
							var vacina = {
									nome: form.nome.value,
									peso: form.peso.value,
									altura: form.altura.value,
									gordura: form.gordura.value,
							}
							return vacina;
						}
						function montaTR(vacina){
									var vacinaTR = document.createElement("tr");
									vacinaTR.classList.add("vacina");

									vacinaTR.appendChild(montaTd(vacina.nome, "info-nome"));
									vacinaTR.appendChild(montaTd(vacina.peso, "info-peso"));
									vacinaTR.appendChild(montaTd(vacina.altura, "info-altura"));
									vacinaTR.appendChild(montaTd(vacina.gordura, "info-gordura"));

									return vacinaTR;
							}
							function montaTd(dado, classe){
								var td = document.createElement("td");
								td.textContent = dado;
								td.classList.add(classe);
								return td;
							}

							function validaVacina(vacina){
								var erros = [];
								if (vacina.nome.length == 0){
									erros.push("O nome inválido ou vazio");
								}

								if(vacina.altura.length > 11){
										erros.push("Data de Aplicação inválida ou vazia");
										}

								if(vacina.peso.length > 11){
										erros.push("Data de Cadastro inválida ou vazia");
										}

								if (vacina.gordura.length > 11){
									erros.push("Data de Alteração inválida ou vazia");
								}


								return erros;
							}

							function exibeMensagensdeErro(erros){
								var ul = document.querySelector("#mensagens-erro");


								ul.innerHTML = "";
								erros.forEach(function(erro){
									var li = document.createElement("li");
									li.textContent = erro;
									ul.appendChild(li);
								});
							}
