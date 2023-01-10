var form = document.querySelector('form');

$("#cakeForm").submit(function(event){
    event.preventDefault();
 });

$('#inputDate').attr('min', new Date().toISOString().split("T")[0]);

$("#inputZipcode").focusout(function () {
    $.ajax({
        url: 'https://viacep.com.br/ws/' + $(this).val() + '/json/',
        type: 'GET',
        headers: { 'Access-Control-Allow-Origin': '*' },
        crossDomain: true,
        dataType: 'json',
        success: function (resposta) {
            $("#inputAddress").val(resposta.logradouro);
            $("#inputAddress2").val(resposta.complemento);
            $("#inputCity").val(resposta.localidade);
            $("#inputState").val(resposta.uf);

            $("#inputAddress").focus();
        }
    });
});

$('#btnSubmit').click(function () {

    var formEvaluation = $('#cakeForm');

    if (form.checkValidity()){
        $.ajax({
    
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: "POST",
            dataType: "json",
            data: formEvaluation.serialize(),
            success: function (formEvaluation) {
                alert('PEDIDO ENVIADO COM SUCESSO');
                
                //Log do JSON que envio via ajax
                console.log(formEvaluation);
            },
            error: function () {
                alert('ERRO AO ENVIAR');
            },
        });
    } else {
        form.classList.add('was-validated')
    }
});