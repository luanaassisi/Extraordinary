let nome = window.document.querySelector('#nome')
let email = window.document.querySelector('#email')
let senha = window.document.querySelector('#senha')

// function validaNome() {
//     let txt = document.querySelector('#txtNome')
//     if (nome.value.lenght < 3){
//         txt.innerHTML = "Nome Inválido"
//         txt.style.color = 'red'
//     } else{
//         txt.innerHTML = "Nome Válido"
//         txt.style.color = 'green'
//     }
//     }

    function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
            txtEmail.innerHTML = 'E-mail Inválido'
            txtEmail.style.color = 'red'
        }else{
            txtEmail.innerHTML = 'E-mail Válido'
            txtEmail.style.color = 'green'
        }
    }

    function validaSenha(){
        let txtSenha = document.querySelector('#txtSenha')

        if (senha.value.length <= 7 ){
            txtSenha.innerHTML = 'Sua senha deve conter no mínimo 8 caracteres'
            txtSenha.style.color = 'red'
        }else{
            txtSenha.innerHTML = 'Senha Válida'
            txtSenha.style.color = 'green'
        }
    }

    // function confirmaSenha(){
    //     let txtSenha = document.querySelector('#txtSenha')

    //     if (senha.value.length <= 8 ){
    //         txtSenha.innerHTML = 'Sua senha deve conter no mínimo 8 caracteres'
    //         txtSenha.style.color = 'red'
    //     }else{
    //         txtSenha.innerHTML = 'Senha Válida'
    //         txtSenha.style.color = 'green'
    //     }
    // }