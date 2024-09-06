/* Função para abrir a gaveta e esconder o botão */
function openDrawer() {
    document.getElementById("sideDrawer").style.width = "250px";
    document.querySelector(".openbtn").style.display = "none"; // Esconde o botão de menu
}

/* Função para fechar a gaveta e mostrar o botão novamente */
function closeDrawer() {
    document.getElementById("sideDrawer").style.width = "0";
    document.querySelector(".openbtn").style.display = "block"; // Mostra o botão de menu novamente
}
