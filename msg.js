function send_msg(){
    console.log("egine");
    let name=document.getElementById("name");
    let mail=document.getElementById("email");
    let message=document.getElementById("msg");


    $.ajax({url: "api.php/send",
    method: 'GET',
    dataType: "json",
    contentType: 'application/json',
    data: JSON.stringify( {name: name, email:mail, message:message}),
    success: ok_request,
    error: error});

}

function ok_request(){
    alert("The message was sent ");
}



function error(data) {
    var x = data.responseJSON;
    alert(x.errormesg);
}

function allok(){
    console.log("bike");
}