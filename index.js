let vitorias = 80;
let derrotas = 10;
let nivel = "";

let saldoVitorias = vitorias - derrotas

function WinValue(saldoVitorias, nivel = "") {
    if (saldoVitorias <= 0) {
        nivel = "ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "bronze";
    }   else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "prata";
    }  else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "imortal";
    }
    return nivel
}
nivel = WinValue(saldoVitorias)

console.log("o heroi tem saldo de: " + saldoVitorias + ", está no nível:" + nivel)