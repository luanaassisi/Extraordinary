
$("#botao-cadastrar").on("click", function (event) {
  event.preventDefault()
  let cep = $("#inputCep").val();
  // let url = "https://viacep.com.br/ws/"+cep+"/json";

  $.ajax({
    url: `https://viacep.com.br/ws/${cep}/json`,
    type: "GET",

    success: function (dados) {
      console.log(dados);
      $("#inputEstado").val(dados.uf);
      $("#inputCidade").val(dados.localidade);
      $("#inputBairro").val(dados.bairro);
      $("#inputRua").val(dados.logradouro);
    }
  })

  try { viaCEP() }

  catch (error) {
    console.log("CEP inválido")
  }
})

//json.Stringly
// function recuperarCEP(input) {
//     const cep = input.value.replace(/\D/g, '');
//     const url = `https://viacep.com.br/ws/${cep}/json`;
//     const options = {
//         method: "GET",
//         mode: "cors",
//         headers: {
//             'content-type': 'application/json;charset=utf-8',
//         }
//     }
//     if(!input.validity.patternMismatch && !input.validity.valueMissing) {
//         fetch(url, options).then(
//             response => response.json()
//         ).then(
//             data => {
//                 console.log(data)
//             }
//         )
//     }
// }




