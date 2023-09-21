function calcularFaixaEtaria() {
    const idade = parseInt(document.getElementById('idade').value);
    let faixaEtaria = '';

    if (idade >= 3 && idade <= 10) {
        faixaEtaria = '3 a 10 anos';
    } else if (idade >= 11 && idade <= 25) {
        faixaEtaria = '11 a 25 anos';
    } else if (idade >= 36 && idade <= 55) {
        faixaEtaria = '36 a 55 anos';
    } else if (idade >= 56 && idade <= 100) {
        faixaEtaria = '56 a 100 anos';
    } else {
        faixaEtaria = 'Idade fora das faixas especificadas';
    }

    document.getElementById('resultado').textContent = `Faixa etária: ${faixaEtaria}`;
}