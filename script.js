let listadoardor = [];
document.getElementById("formDoacao").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let partes = nome.split(" ");
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;
    let estado = document.getElementById("estado").value;






    if (partes.length < 2) {
        alert("Digite o nome completo");
    }


    if (email.includes("@")) {

    } else {
        return alert("o email precisa ter @");
    }


    if (!tipo) return alert("assinale a opção do tipo");

    if (telefone === "") {
        return alert("digite seu telefones");
    }

    if (!/^[0-9]+$/.test(telefone)) {
        return alert("o telefone deve ter apenas numeros");
    }

    if (estado.length <= 0) return alert("digite o seu estado")

    if (telefone.length < 8) return alert("telefone invalido");

    if (peso < 50) return alert("voce precisa ter no minimo 50kg");

    if (idade <= 16) return alert("precisa ter no minimo 16 anos");

    if (cidade.length <= 0) return alert("digite a sua cidade");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;


    let novodoador = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value;
        telefone: document.getElementById("telefone").value;
        idade: document.getElementById("idade").value;
        cidade = document.getElementById("cidade").value;
        peso: document.getElementById("peso").value;
        tipo: document.getElementById("tipo").value;
        estado: document.getElementById("estado").value;
    };

    //guarda isso em um objeto
    //guarda o objeto dentro de um array que tu criou fora da função
    //doador
    //doadores


    //push

});