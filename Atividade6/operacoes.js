function calcular() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado").innerHTML = "Digite os dois números.";
        return;
    }

    var soma = a + b;
    var subtracao = a - b;
    var produto = a * b;
    var divisao;
    var resto;

    if (b === 0) {
        divisao = "impossível (divisão por zero)";
        resto = "impossível (divisão por zero)";
    } else {
        divisao = (a / b).toFixed(2);
        resto = a % b;
    }

    document.getElementById("resultado").innerHTML =
        "Soma: " + soma + "<br>" +
        "Subtração: " + subtracao + "<br>" +
        "Produto: " + produto + "<br>" +
        "Divisão: " + divisao + "<br>" +
        "Resto da divisão: " + resto;
}