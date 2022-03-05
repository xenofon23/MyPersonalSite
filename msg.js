
function ok_request(){
    alert("The message was sent ");
}



function error(data) {
    // var x = data.responseJSON;
    // alert(x.errormesg);
}

function allok(){
   
    let name=$('#name').val()
    let mail=$('#email').val()
    let message=$('#msg').val()
     console.log(name);
    console.log("egine");

    $.ajax({url: "api.php/send",

    method: 'PUT',
    dataType: "json",
    // headers: {"X-Token": me.token},
    contentType: 'application/json',
    data: JSON.stringify( {name: name, email:mail, message:message}),
    success: ok_request,
    error: error
});
}
