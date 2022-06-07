 $("#botao-cadastrar").on("click", function(event){
   event.preventDefault()
    let cep = $("#inputCep").val();
    // let url = "https://viacep.com.br/ws/"+cep+"/json";

$.ajax({
    url: `https://viacep.com.br/ws/${cep}/json`, 
    type:"GET",
    
    success: function(dados) {
      console.log(dados);
       $("#inputEstado").val(dados.uf);
       $("#inputCidade").val(dados.localidade);
       $("#inputBairro").val(dados.bairro);
       $("#inputRua").val(dados.logradouro);
      } 
     })
})

  
