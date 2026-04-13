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
   



    
    let = regexletras = /^[a-zÀ-ÿ\s]+$/;

    if (partes.length < 2 || !regexletras.test(nome)){
        alert("Digite o nome completo");
        return false;  
    }


    if (email.includes("@")) {

    } else {
        return alert("o email precisa ter @");
    }

    if (telefone.length < 8) return alert("telefone invalido");

    if (peso <= 50) return alert("voce precisa ter no minimo 50kg");

    if (idade < 16) return alert("é necessário ser maior de idade");

    if (cidade.length <= 0) return alert("digite a sua cidade");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;

});