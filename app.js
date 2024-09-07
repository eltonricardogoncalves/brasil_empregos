
window.onload = function () {

    AtivarMenu();
    PesquisarUtilizandoEnter();
    AtivaSelecaoEstado();
};

function AtivarMenu() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

        });
    });
}

function CarregarTodosDados() {
    let section = document.getElementById("resultados-pesquisa")
    let resultado = "";


    let index = 0;
    for (let dado of dados) {

        resultado += `<div class="item-resultado">
                        <h2>${dado.cargo}</h2>

                        <p class="descricao-meta">
                            ${dado.empresa}
                        </p>

                        <div class="div_botao_mais_detalhe">
                        <button class="button2" onclick="abrirModal(${index})"> <i class="fa-solid fa-eye"></i> Mais detalhes</button>
                        </div>
                        <div id="myModal${index}" class="modal">
                            <div class="modal-content">
                                <span class="close" onclick="fecharModal(${index})">&times;</span>

                                    <h2>${dado.cargo}</h2>

                                    <p class="descricao-meta">
                                        ${dado.empresa}
                                    </p>

                                    <h3>Responsabilidades:</h3>
                                    
                                    <p class="descricao-meta">
                                        ${dado.responsabilidades}
                                    </p>

                                    <h3>Requisitos:</h3>

                                    <p class="descricao-meta">
                                        ${dado.requisitos}
                                    </p>

                                    <h3>Benefícios:</h3>

                                    <p class="descricao-meta">
                                    ${dado.benefícios}
                                    </p>

                                    <h3>Para se candidatar:</h3>

                                    <p class="descricao-meta">
                                    ${dado.contato}
                                    </p>
                                
                            </div>      
                       </div>

   
                    </div>`

        index += 1;
    }

    section.innerHTML = resultado;
}

function pesquisar() {

    FiltroDados();
 
}

function abrirModal(index) {
    document.getElementById('myModal' + index).style.display = "block";
}

function fecharModal(index) {
    document.getElementById('myModal' + index).style.display = "none";
}

function PesquisarUtilizandoEnter() {
    let campoPesquisa = document.getElementById("campo-pesquisa");
    campoPesquisa.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            // Código para executar quando o Enter for pressionado
            FiltroDados();
        }
    });
}

function FiltroDados() {

    let resultado = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let section = document.getElementById("resultados-pesquisa");
    let selecaoEstado =  document.getElementById('estadofiltro').value

    if (campoPesquisa == "" && selecaoEstado == "") {
        section.innerHTML = resultado = "<h1>Digitar uma oportunidade antes de pesquisar.</h1>";
        return
    }

    let cargos = "";
    let index = 0;
    for (let dado of listaRecuperada) {

        cargos = dado.cargo.toLowerCase();
        

        if(selecaoEstado== ""){
 
            if (cargos.includes(campoPesquisa.toLowerCase())) {

                resultado += `<div class="item-resultado">

                <div class="card2">
                <img src="${dado.logo}" alt="Logo da empresa" class="logo">
                <div class="contentCard">
                        <h2>${dado.cargo}</h2>

                        <p class="descricao-meta">
                            ${dado.empresa}
                        </p>

                        <p class="descricao-meta">
                        ${dado.estado}  / Valor: R$ ${dado.valor} </p>
                </div>
              </div>
                <div class="div_botao_mais_detalhe">
                <button class="button2" onclick="abrirModal(${index})"> <i class="fa-solid fa-eye"></i> Mais detalhes</button>
                </div>
                <div id="myModal${index}" class="modal">
                    <div class="modal-content">
                        <span class="close" onclick="fecharModal(${index})">&times;</span>

                            <h2>${dado.cargo}</h2>

                            <h3>${dado.estado}  / Valor: R$ ${dado.valor}  </h3>
                            <p class="descricao-meta">
                                ${dado.empresa}
                            </p>

                            <h3>Responsabilidades:</h3>
                            
                            <p class="descricao-meta">
                                ${dado.responsabilidades}
                            </p>

                            <h3>Requisitos:</h3>

                            <p class="descricao-meta">
                                ${dado.requisitos}
                            </p>

                            <h3>Benefícios:</h3>

                            <p class="descricao-meta">
                            ${dado.benefícios}
                            </p>

                            <h3>Para se candidatar:</h3>

                            <p class="descricao-meta">
                            ${dado.contato}
                            </p>
                        
                    </div>      
            </div>

            </div>`

                index += 1;
            }

        }
        else if  (selecaoEstado != "" && campoPesquisa == ""){
        
            if (dado.estado.includes(selecaoEstado)) {

                resultado += `<div class="item-resultado">

                <div class="card2">
                <img src="${dado.logo}" alt="Logo da empresa" class="logo">
                <div class="contentCard">
                        <h2>${dado.cargo}</h2>

                        <p class="descricao-meta">
                            ${dado.empresa}
                        </p>

                        <p class="descricao-meta">
                        ${dado.estado}  / Valor: R$ ${dado.valor} </p>
                </div>
              </div>
                <div class="div_botao_mais_detalhe">
                <button class="button2" onclick="abrirModal(${index})"> <i class="fa-solid fa-eye"></i> Mais detalhes</button>
                </div>
                <div id="myModal${index}" class="modal">
                    <div class="modal-content">
                        <span class="close" onclick="fecharModal(${index})">&times;</span>

                            <h2>${dado.cargo}</h2>

                            <h3>${dado.estado}  / Valor: R$ ${dado.valor}  </h3>
                            <p class="descricao-meta">
                                ${dado.empresa}
                            </p>

                            <h3>Responsabilidades:</h3>
                            
                            <p class="descricao-meta">
                                ${dado.responsabilidades}
                            </p>

                            <h3>Requisitos:</h3>

                            <p class="descricao-meta">
                                ${dado.requisitos}
                            </p>

                            <h3>Benefícios:</h3>

                            <p class="descricao-meta">
                            ${dado.benefícios}
                            </p>

                            <h3>Para se candidatar:</h3>

                            <p class="descricao-meta">
                            ${dado.contato}
                            </p>
                        
                    </div>      
            </div>

            </div>`

                index += 1;
            }
        }
        else{
            if (cargos.includes(campoPesquisa.toLowerCase()) && dado.estado.includes(selecaoEstado)) {

                resultado += `<div class="item-resultado">

                <div class="card2">
                <img src="${dado.logo}" alt="Logo da empresa" class="logo">
                <div class="contentCard">
                        <h2>${dado.cargo}</h2>

                        <p class="descricao-meta">
                            ${dado.empresa}
                        </p>

                        <p class="descricao-meta">
                        ${dado.estado}  / Valor: R$ ${dado.valor} </p>
                </div>
              </div>
                <div class="div_botao_mais_detalhe">
                <button class="button2" onclick="abrirModal(${index})"> <i class="fa-solid fa-eye"></i> Mais detalhes</button>
                </div>
                <div id="myModal${index}" class="modal">
                    <div class="modal-content">
                        <span class="close" onclick="fecharModal(${index})">&times;</span>

                            <h2>${dado.cargo}</h2>

                            <h3>${dado.estado}  / Valor: R$ ${dado.valor}  </h3>
                            <p class="descricao-meta">
                                ${dado.empresa}
                            </p>

                            <h3>Responsabilidades:</h3>
                            
                            <p class="descricao-meta">
                                ${dado.responsabilidades}
                            </p>

                            <h3>Requisitos:</h3>

                            <p class="descricao-meta">
                                ${dado.requisitos}
                            </p>

                            <h3>Benefícios:</h3>

                            <p class="descricao-meta">
                            ${dado.benefícios}
                            </p>

                            <h3>Para se candidatar:</h3>

                            <p class="descricao-meta">
                            ${dado.contato}
                            </p>
                        
                    </div>      
            </div>

            </div>`

                index += 1;
            }
        }


    }



    if (resultado == "") {
        section.innerHTML = resultado = "<h1>Nenhuma oportunidade encontrada</h1>";
        return
    }

    section.innerHTML = resultado;
}

function Cadastrar() {

    const novaVaga = {
        logo: 'https://www.alura.com.br/assets/img/alura-share.1720710817.png',
        cargo: document.getElementById('cargo').value,
        empresa: document.getElementById('empresa').value,
        responsabilidades: document.getElementById('responsabilidade').value,
        requisitos: document.getElementById('requisito').value,
        benefícios: document.getElementById('beneficios').value,
        contato: document.getElementById('contato').value,
        estado: document.getElementsByName('estado')[0].value,
        valor: document.getElementById('valor').value,
    };

    listaRecuperada.push(novaVaga);

    sessionStorage.setItem('minhaLista', JSON.stringify(listaRecuperada));
    alert("Anuncio cadastrado com sucesso!!!")
    window.location.href = "index.html";
   
}


function AtivaSelecaoEstado(){
    const selectElement = document.getElementById('estadofiltro');

    selectElement.addEventListener('change', function() {
        FiltroDados();
    });
}
