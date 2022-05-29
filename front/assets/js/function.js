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