email = document.getElementById("email").value;
password = document.getElementById("password").value;
var err ;

function validateForm() {
    if(email.value == ""){
        document.getElementById('email').innerHTML = "Digite um e-mail";
        err = 0;
    } else if(email.length <3){
        document.getElementById('email').innerHTML = "Email não cadastrado";
        err = 0;
    } else{
        document.getElementById('email').innerHTML = "";
        err = 1;
    }

    if(password.value == ""){
        document.getElementById('password').innerHTML = "Digite uma senha";
        err = 0;
    } else if(password.length == 0){
        document.getElementById('password').innerHTML = "Senha incorreta";
        err = 0;
    } else{
        document.getElementById('password').innerHTML = "";
        err = 1;
    }
}

const form = document.getElementById('registerform')
form.addEventListener('submit', e => {
    e.preventDefault();
});

function Registro() { 
    var url = "https://tcc-production.up.railway.app/api/starvingless/user/v1/create";

    // Pega valores do login e seta nas variáveis
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var CPF = document.getElementById("cpf").value;
    var Address = document.getElementById("address").value;
    var Password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var Phone = document.getElementById("phone").value;
    var date = new Date();
    var optionsdate = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
    };
    var SignUpDate = date.toLocaleDateString("pt", optionsdate);

    // Cria um objeto com as informações de login
    const loginData = {
        FirstName: FirstName,
        LastName: LastName,
        CPF: CPF,
        Address: Address,
        Password: Password,
        email: email,
        Phone: Phone,
        SignUpDate: SignUpDate
    };
    
    // Envia a requisição POST com o corpo da mensagem
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        // Trata a resposta da API
        if (response.ok) {
                // Se o token de acesso for retornado, armazena-o em algum lugar para uso posterior
                alert("Registro realizado com SUCESSO realize o LOGIN");
                setTimeout(() => {
                    window.location.href = "/index.html";
                  }, "5000");
        } else {
            console.log("Erro ao fazer login");
        }
    })
    .catch(error => {
        console.log(error);
    });
}

var submitButton = document.getElementById("submit");
$(submitButton).on('click', function() {
    Registro();
});

