let nome = window.document.querySelector('#nome')
let email = window.document.querySelector('#email')
let senha = window.document.querySelector('#senha')
let confirmaSenha = window.document.querySelector('#confirmaSenha')
let novaSenha = window.document.querySelector('#novaSenha')
let emailOk = false
let senhalOk = false

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
            emailOk = true
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
            senhaOk = true
        }
    }

    function senhaNova(){
        let txtNovaSenha = document.querySelector('#txtNovaSenha')

        if (novaSenha.value.length <= 7 ){
            txtNovaSenha.innerHTML = 'Sua senha deve conter no mínimo 8 caracteres'
            txtNovaSenha.style.color = 'red'
        }else{
            txtNovaSenha.innerHTML = 'Senha Válida'
            txtNovaSenha.style.color = 'green'
        }
    }

    function senhaConfirma(){
        let txtConfirmaSenha = document.querySelector('#txtConfirmaSenha')

        if (senha.value != confirmaSenha.value){
            txtConfirmaSenha.innerHTML = 'Suas senhas não coincidem'
            txtConfirmaSenha.style.color = 'red'
        }else{
            txtConfirmaSenha.innerHTML = 'Senha Válida'
            txtConfirmaSenha.style.color = 'green'
        }
    }

    function enviar(){
     if(emailOk == true && senhaOk == true){
        alert('Código de verificação envida para o e-mail cadastrado')
    }else{
        alert('Preencha os campos corretamente')

    }
}