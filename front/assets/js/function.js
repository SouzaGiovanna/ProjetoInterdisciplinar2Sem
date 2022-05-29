let checkmark = document.getElementsByClassName("checkmark")[0];
let check = document.getElementById("a");

try{
    checkmark.addEventListener("click", () => {
        if(checkmark.classList.contains("clicado")){
            checkmark.classList.remove("clicado");
            check.checked = false;
        }
        else{
            checkmark.classList.add("clicado");
            check.checked = true;
        }
    });
} catch(e){

}

try{
    let tabs = document.getElementsByClassName("nav-link");
    let panels = document.getElementsByClassName("tab-pane");
    
    for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener("click", () => {
            let tabActive = document.getElementsByClassName("nav-link active")[0];
            let panelActive = document.getElementsByClassName("tab-pane active")[0];
    
            let tabSelect = tabs[i];
            let panelSelect = panels[i];
    
            tabActive.classList.remove("active");
            panelActive.classList.remove("show");
            panelActive.classList.remove("active");
    
            tabSelect.classList.add("active");
            panelSelect.classList.add("show");
            panelSelect.classList.add("active");
        });
    }

    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.onclick = function(){
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
    }
}catch(e){

}

function preencherTabela(colunas, tabela, dados){
    const tbody = document.getElementById(tabela);
    dados.forEach(dado => {
        var tr = tbody.querySelector("tr[data-gs-tabela-id='"+dado.id+"']") ?? document.createElement("tr");
        tr.dataset.gsTabelaId = dado.id;
    
        for(let i = 0; i < colunas.length; i++){
            let td = tr.querySelector("td[data-gs-id="+colunas[i]+"]") ?? document.createElement("td");
            td.dataset.gsId = colunas[i];
            td.textContent = dado[colunas[i]];
            tr.appendChild(td);
        }

        var tdAcoes = tr.querySelector("td[data-gs-acoes]") ?? document.createElement("td");
        tdAcoes.dataset.gsId = "acoes";

        var editButton = document.createElement("a");
        editButton.classList.add("btn", "btn-warning", "btn-sm");
        editButton.href = "javascript:void(0)";
        editButton.addEventListener("click", () => {
            alert("Editar tabela: " +tabela+", linha: " +dado.id);
        });

        var lapis = document.createElement("i");
        lapis.classList.add("bi", "bi-pen");
        editButton.appendChild(lapis);

        var deleteButton = document.createElement("a");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.href = "javascript:void(0)";
        deleteButton.addEventListener("click", () => {
            alert("Excluir tabela: " +tabela+", linha: " +dado.id);
        });

        var lixo = document.createElement("i");
        lixo.classList.add("bi", "bi-trash");
        deleteButton.appendChild(lixo);

        tdAcoes.innerHTML = "";
        tdAcoes.appendChild(editButton);
        tdAcoes.appendChild(deleteButton);
    
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
    });
}