const usuariocorreto = "admin";
const senhacorreta = 1234;
const maxtentativas = 3;
let logado = false;

for (let tentativa = 1; tentativa < maxtentativas; tentativa++) {
    let usuariopInput = prompt('[tentativa ${tentativa} de ${maxtentativas} Digite o nome de usuário:]');
    let senhaInput('[tentativa ${tentativa} de ${maxtentativas} Digite a senha de usuário:]');
    
    if (usuariopInput === usuariocorreto && senhaInput === senhacorreta) {
        alert("login efetuado com sucesso! Bem vindo.");
        logado = true;
        break;
    }
    if (tentativa < maxtentativas) {
        alert('Dados incorretos você ainda tem ${maxtentativas - tentativa} tentativa(s)');
    }

    if (!logado) {
        alert("número máximo de tentativas excedido! Sua conta foi bloqueada por segurança.");
    }
}