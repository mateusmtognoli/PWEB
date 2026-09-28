function calcularMedia() {
    var nome = document.getElementById("nome").value;

    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var n4 = parseFloat(document.getElementById("nota4").value);

    if (nome === "" || isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        document.getElementById("resultado").innerHTML = "Preencha o nome e as quatro notas.";
        return;
    }

    var media = (n1 + n2 + n3 + n4) / 4;

    document.getElementById("resultado").innerHTML =
        "Aluno: " + nome + "<br>Média: " + media.toFixed(2);
}