function concatenarDados() {
    const nome = document.getElementById('nome').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const faixaEtaria = document.getElementById('faixaEtaria').value;
    const mensagem = document.getElementById('mensagem');

    const resultado = `Nome: ${nome}, Estado Civil: ${estadoCivil}, Faixa Etária: ${faixaEtaria}`;
    mensagem.textContent = resultado;
}