// Funcao 1
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}
 
// Funcao 2
function ordemCrescente(a, b, c) {
    return [a, b, c].sort(function (x, y) { return x - y; });
}
 
// Funcao 3
function palindromo(texto) {
    var limpo = texto.toLowerCase().replace(/\s/g, "");
    var invertido = limpo.split("").reverse().join("");
    return limpo === invertido;
}
 
// Funcao 4
function subconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "erro";
    }
    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    }
    return "não é um subconjunto";
}
 
// Funcao 5
function diaDaSemana(data) {
    var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var partes = data.split("/");
    var d = new Date(partes[2], partes[1] - 1, partes[0]);
    return dias[d.getDay()];
}
 

// Funções chamadas pelos botões
function funcao1() {
    alert("Função 1: digite três números para descobrir o maior.");
    var a = Number(prompt("Primeiro número:"));
    var b = Number(prompt("Segundo número:"));
    var c = Number(prompt("Terceiro número:"));
    alert("Números: " + a + ", " + b + ", " + c +
          "\nO maior é: " + maiorNumero(a, b, c));
}
 
function funcao2() {
    alert("Função 2: digite três números para colocá-los em ordem crescente.");
    var a = Number(prompt("Primeiro número:"));
    var b = Number(prompt("Segundo número:"));
    var c = Number(prompt("Terceiro número:"));
    alert("Números: " + a + ", " + b + ", " + c +
          "\nOrdem crescente: " + ordemCrescente(a, b, c).join(", "));
}
 
function funcao3() {
    alert("Função 3: digite um texto para saber se é palíndromo.");
    var texto = prompt("Digite um texto:");
    var resultado = palindromo(texto) ? "É palíndromo" : "Não é palíndromo";
    alert("Texto: " + texto + "\nResultado: " + resultado);
}
 
function funcao4() {
    alert("Função 4: digite duas palavras para saber se a segunda está contida na primeira.");
    var p1 = prompt("Primeira palavra:");
    var p2 = prompt("Segunda palavra:");
    alert("Palavras: " + p1 + " / " + p2 +
          "\nResultado: " + subconjunto(p1, p2));
}
 
function funcao5() {
    alert("Função 5: digite uma data para descobrir o dia da semana.");
    var data = prompt("Digite uma data (dd/mm/aaaa):");
    alert("Data: " + data + "\nDia da semana: " + diaDaSemana(data));
}
 