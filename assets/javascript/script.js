const textArea = document.getElementById("texto");
const obrigatorio = document.getElementById("obrigatorio");

function sortearItem() {
    if (!textArea.value) {
        textArea.style.border = "1px , solid, red";
        obrigatorio.textContent = "*Preencha o Campo Obrigatório!";
        obrigatorio.style.color = "red";
        obrigatorio.classList.remove("sorteado");
        obrigatorio.style.fontFamily = "Arial";
    }
    else {
    const itemArray = textArea.value.split(",");
    const numeroSorteado = Math.floor(Math.random() * itemArray.length);
    const itemSorteado = itemArray[numeroSorteado];
    obrigatorio.textContent = `${itemSorteado.trim()}`;
    obrigatorio.style.color = "black";
    textArea.style.border = "1px , solid, #000000";
    obrigatorio.classList.add("sorteado");
    obrigatorio.style.fontFamily = "Poetsen One, sans-serif";
    }
}