function verificarCampos() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (login.trim() === '' || senha.trim() === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
    } else {
        mensagem.textContent = 'Campos preenchidos com sucesso.';
    }
}