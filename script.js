document.getElementById("formDoacao").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let partes = nome.split(" ");
    console.log(partes);
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let peso = document.getElementById("peso").value;
     let tipo = document.getElementById("tipo").value;
    let estado = document.getElementById("estado").value;
   



    

    if (partes.length < 2){
        alert("Digite o nome completo");
    }


    if (email.includes("@")) {

    } else {
        return alert("o email precisa ter @");
    }


    if (!tipo) return alert("assinale a opção do tipo");


    if (estado.length <=0) return alert("digite o seu estado")

    if (telefone.length < 8) return alert("telefone invalido");

    if (peso < 50) return alert("voce precisa ter no minimo 50kg");

    if (idade <= 16) return alert("precisa ter no minimo 16 anos");

    if (cidade.length <= 0) return alert("digite a sua cidade");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;

});