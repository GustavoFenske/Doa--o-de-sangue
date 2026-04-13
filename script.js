document.getElementById("formAdoção").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value.trim;
    
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value
    let cidade = document.getElementById("cidade").value
    let moradia = document.getElementById("moradia").value;
    let peso = document.getElementById("peso").value;
   



    let partes = nome.split(/\s+/);
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

    if (idade < 16) return alert("é necessário ser maior de idade");

    if (cidade.length <= 0) return alert("digite a sua cidade");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;


});