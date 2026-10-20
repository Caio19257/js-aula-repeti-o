function fazerLogin() {
    const usuariocorreto = "admin";
    const senhacorreta = "1234";
    const maxtentativas = 3;
    let logado = false;

    for (let tentativa = 1; tentativa <= maxtentativas; tentativa++) {
        let usuariopInput = prompt("[" + tentativa + " de " + maxtentativas + "] Digite o nome de usuário:");
        let senhaInput = prompt("[" + tentativa + " de " + maxtentativas + "] Digite a senha:");

        if (usuariopInput === usuariocorreto && senhaInput === senhacorreta) {
            alert("Login efetuado com sucesso! Bem-vindo.");
            logado = true;
            break;
        }

        if (tentativa < maxtentativas) {
            alert("Dados incorretos! Você ainda tem " + (maxtentativas - tentativa) + " tentativa(s).");
        }
    }

    if (!logado) {
        alert("Número máximo de tentativas excedido! Sua conta foi bloqueada por segurança.");
    }
}