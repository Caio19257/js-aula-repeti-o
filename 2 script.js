const usuariocorreto = "admin";
const senhacorreta = "admin";
let login = false;
while(!login)
    let usuariopInput = prompt("Digite o seu nome de usuário: ")
    let senhaInput = prompt("Digite a senha de usuário: ")
    if (usuariopInput === usuariocorreto && senhaInput === senhacorreta) {
        alert("login efetuado com sucesso!")
        login = true;
    }
    else {
        alet("usuário ou senha incorretos. tente novamente!")
    }