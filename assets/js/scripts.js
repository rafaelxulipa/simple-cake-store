$('#inputDate').attr('min', new Date().toISOString().split("T")[0])

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
            $("#inputDistrict").val(resposta.bairro);
            $("#inputCity").val(resposta.localidade);
            $("#inputState").val(resposta.uf);

            $("#inputAddress").focus();
        }
    });
});


// (function () {
//     'use strict'

//     var forms = document.querySelectorAll('.needs-validation')

//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }

//           form.classList.add('was-validated')
//         }, false)
//       })
//   })();

var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

$("#firstName").on('change', function() { 

    if(!$.trim($("#firstName").val())) {
       $("#lastName").prop('disabled', true);
       console.log('vazio');
     } else {
           $("#lastName").prop('disabled', false);
       }
 });



$('#btnSubmit').click(function () {

    $("#cakeForm").validate();

    var formEvaluation = $('#cakeForm');


    $.ajax({

        url: 'https://jsonplaceholder.typicode.com/posts',
        type: "post",
        dataType: "json",
        data: formEvaluation.serialize(),
        success: function (formEvaluation) {
            alert('PEDIDO ENVIADO COM SUCESSO');
            //Log do JSON que envio visa ajax
            console.log(formEvaluation);
        },
        error: function () {
            alert('ok erro');
        },
    });

});