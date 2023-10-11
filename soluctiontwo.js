const levels = {
    0: "ferro",
    11: "bronze",
    21: "prata",
    51: "ouro",
    81: "diamante",
    91: "lendário",
    101: "imortal",
};
function contadorDeVitorias(vitorias, derrotas) {
let saldoVitorias = vitorias - derrotas
let userLevel = ""
for (const nivelLimite in levels) {
    if (saldoVitorias < nivelLimite) {
        userLevel = levels[nivelLimite];
        break;
    }
    }
    return userLevel;
}

let vitorias = 80;
let derrotas = 10;

const userLevel = contadorDeVitorias(vitorias, derrotas)

console.log("o heroi tem saldo de: " + (vitorias - derrotas) + ", está no nível: " + userLevel)